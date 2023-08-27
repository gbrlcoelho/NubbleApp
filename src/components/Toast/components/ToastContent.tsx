import React from 'react';
import {Dimensions} from 'react-native';

import {Box, BoxProps, Icon, IconProps, Text} from '@components';
import {ToastPosition, ToastType} from '@services';
import {$shadowProps} from '@theme';

import {ToastContentProps} from './ToastContentProps';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export const ToastContent = ({toast}: ToastContentProps) => {
  const position: ToastPosition = toast?.position || 'top';
  const type: ToastType = toast?.type || 'success';

  return (
    <Box {...$boxStyle} style={[{[position]: 100}, $shadowProps]}>
      <Icon {...mapTypeToIcon[type]} />
      <Text
        style={{flexShrink: 1}}
        marginLeft="s16"
        preset="paragraphMedium"
        bold>
        {toast?.message}
      </Text>
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
