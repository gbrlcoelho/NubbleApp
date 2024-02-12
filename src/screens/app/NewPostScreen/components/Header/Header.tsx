import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Button, Icon, Text} from '@components';

import {HeaderProps} from './HeaderProps';

export const Header = ({imageUri, imageWidth}: HeaderProps) => {
  const {navigate} = useNavigation();

  const navigateToPublishPost = () => {
    if (imageUri) {
      navigate('PublishPostScreen', {imageUri});
    }
  };

  return (
    <Box>
      <ImageBackground
        source={{uri: imageUri}}
        style={[
          styles.imageBackground,
          {width: imageWidth, height: imageWidth},
        ]}>
        {Boolean(imageUri) && (
          <Button
            preset="ghost"
            title="Escolher essa"
            marginBottom="s24"
            onPress={navigateToPublishPost}
          />
        )}
      </ImageBackground>
      <Box {...$optionsStyle}>
        <Text preset="headingSmall">Sua galeria</Text>
        <Icon name="camera" />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

const $optionsStyle: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingVertical: 's16',
};
