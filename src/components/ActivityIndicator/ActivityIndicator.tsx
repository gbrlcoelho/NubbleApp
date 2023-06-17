import React from 'react';
import {ActivityIndicator as RNActivityIndicator} from 'react-native';

import {useAppTheme} from '@hooks';

import {ActivityIndicatorProps} from './ActivityIndicatorProps';

export const ActivityIndicator = ({
  color,
  ...activityIndicatorProps
}: ActivityIndicatorProps) => {
  const {colors} = useAppTheme();

  return (
    <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />
  );
};
