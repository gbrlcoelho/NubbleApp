import {useTheme} from '@shopify/restyle';
import React from 'react';
import {ActivityIndicator as RNActivityIndicator} from 'react-native';
import {Theme} from '../../theme/theme';
import {ActivityIndicatorProps} from './ActivityIndicatorProps';

export const ActivityIndicator = ({
  color,
  ...activityIndicatorProps
}: ActivityIndicatorProps) => {
  const {colors} = useTheme<Theme>();

  return (
    <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />
  );
};
