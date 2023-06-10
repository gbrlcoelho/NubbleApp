import React from 'react';
import {ScrollView, View} from 'react-native';
import {ScreenContainerProps} from './ScreenContainerProps';

export const ScrollViewContainer = ({
  children,
  backgroundColor,
}: ScreenContainerProps) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor, flex: 1}}>
      {children}
    </ScrollView>
  );
};

export const ViewContainer = ({
  children,
  backgroundColor,
}: ScreenContainerProps) => {
  return <View style={{backgroundColor}}>{children}</View>;
};
