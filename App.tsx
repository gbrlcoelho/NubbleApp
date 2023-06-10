import {Box, Icon, Text} from '@components/index';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import React from 'react';
import {SafeAreaView, View} from 'react-native';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" bold italic disabled>
            Nubble
          </Text>
          <Box flexDirection="row" flexWrap="wrap">
            <Icon name="heartFillIcon" color="carrotSecondary" size={50} />
            <Icon name="arrowRightIcon" size={50} />
            <Icon name="bookmarkFillIcon" size={50} />
            <Icon name="cameraIcon" size={50} />
            <Icon name="heartFillIcon" size={50} />
            <Icon name="chatIcon" size={50} />
            <Icon name="messageIcon" size={50} />
            <Icon name="settingsIcon" size={50} />
            <Icon name="trashIcon" color="carrotSecondary" size={50} />
            <Icon name="bellOnIcon" color="carrotSecondary" size={50} />
          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};
