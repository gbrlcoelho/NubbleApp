import React, {useState} from 'react';
import {Dimensions} from 'react-native';

import {Box, BoxProps, Icon, IconProps, Text} from '@components';
import {ToastType} from '@services';
import {$shadowProps} from '@theme';

import {ToastContentProps} from './ToastContentProps';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export const ToastContent = ({
  toast: currentToast,
  hideToast,
}: ToastContentProps) => {
  const [actionCalled, setActionCalled] = useState(false);
  const type: ToastType = currentToast?.type || 'success';

  const handleActionPress = () => {
    if (!actionCalled) {
      setActionCalled(true);
      currentToast?.action?.onPress();
      hideToast();
    }
  };

  return (
    <Box {...$boxStyle} style={$shadowProps}>
      <Icon {...mapTypeToIcon[type]} />
      <Text
        style={{flexShrink: 1}}
        marginLeft="s16"
        preset="paragraphMedium"
        bold>
        {currentToast?.message}
      </Text>
      {currentToast?.action && (
        <Text
          disabled={actionCalled}
          marginLeft="s8"
          preset="paragraphMedium"
          color="marked"
          bold
          onPress={handleActionPress}>
          {currentToast.action.title}
        </Text>
      )}
    </Box>
  );
};

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'checkRound',
  },
  error: {
    color: 'error',
    name: 'errorRound',
  },
};

const $boxStyle: BoxProps = {
  backgroundColor: 'background',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};
