import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

export const App = () => {
  return (
    <SafeAreaView>
      <Text preset="headingLarge">headingLarge</Text>
      <Text preset="headingMedium">headingMedium</Text>
      <Text preset="headingSmall">headingSmall</Text>
      <Text preset="paragraphMedium">paragraphMedium</Text>
    </SafeAreaView>
  );
};
