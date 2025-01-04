import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';

import {
  ToastPosition,
  ToastService,
  useToast,
  useToastService,
} from '@services';

import {ToastContent} from './components/ToastContent';

const DEFAULT_DURATION = 2000;

export const Toast = () => {
  const [toastQueue, setToastQueue] = useState<ToastService['toast'][]>([]);
  const [currentToast, setCurrentToast] = useState<
    ToastService['toast'] | null
  >(null);

  const toast = useToast();
  const {hideToast} = useToastService();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const position: ToastPosition = currentToast?.position || 'top';

  const enqueueToast = useCallback(
    (newToast: ToastService['toast']) => {
      setToastQueue(prevQueue => [...prevQueue, newToast]);
    },
    [setToastQueue],
  );

  const dequeueToast = useCallback(() => {
    setToastQueue(prevQueue => prevQueue.slice(1));
  }, [setToastQueue]);

  const runAnimation = useCallback(
    (toValue: number, duration: number, callback?: Animated.EndCallback) => {
      Animated.timing(fadeAnim, {
        toValue,
        duration,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeAnim],
  );

  const showNextToast = useCallback(() => {
    if (toastQueue.length > 0 && !currentToast) {
      const nextToast = toastQueue[0];
      setCurrentToast(nextToast);
      dequeueToast();

      runAnimation(1, 300);

      timeoutRef.current = setTimeout(() => {
        runAnimation(0, 300, () => {
          hideToast();
          setCurrentToast(null);
        });
      }, nextToast?.duration || DEFAULT_DURATION);
    }
  }, [toastQueue, currentToast, dequeueToast, runAnimation, hideToast]);

  useEffect(() => {
    if (toast) {
      enqueueToast(toast);
    }
  }, [toast, enqueueToast]);

  useEffect(() => {
    showNextToast();
  }, [toastQueue, currentToast, showNextToast]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!currentToast) {
    return null;
  }

  return (
    <Animated.View
      testID="toast-message"
      style={{
        position: 'absolute',
        alignSelf: 'center',
        opacity: fadeAnim,
        [position]: 100,
      }}>
      <ToastContent toast={currentToast} hideToast={hideToast} />
    </Animated.View>
  );
};
