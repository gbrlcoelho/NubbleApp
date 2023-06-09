import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/components/Button/Button';
import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" bold italic disabled>
            Nubble
          </Text>
          <Button title="Primary" marginBottom="s12" disabled />
          <Button loading title="Loading" marginBottom="s12" disabled />

          <Button
            title="Outlined"
            preset="outline"
            marginBottom="s12"
            disabled
          />
          <Button
            disabled
            loading
            title="Outlined"
            preset="outline"
            marginBottom="s12"
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};
