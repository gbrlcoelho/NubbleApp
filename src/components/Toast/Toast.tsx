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
  const position: ToastPosition = currentToast?.position || 'top';

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const runExitingAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeAnim],
  );

  useEffect(() => {
    if (toast) {
      setToastQueue(prevQueue => [...prevQueue, toast]);
    }
  }, [toast]);

  useEffect(() => {
    if (toastQueue.length > 0 && !currentToast) {
      const nextToast = toastQueue[0];
      setCurrentToast(nextToast);
      setToastQueue(prevQueue => prevQueue.slice(1));

      runEnteringAnimation();

      setTimeout(() => {
        runExitingAnimation(() => {
          hideToast();
          setCurrentToast(null);
        });
      }, nextToast?.duration || DEFAULT_DURATION);
    }
  }, [
    toastQueue,
    currentToast,
    runEnteringAnimation,
    runExitingAnimation,
    hideToast,
  ]);

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
