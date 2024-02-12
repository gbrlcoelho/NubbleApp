import React from 'react';
import {Dimensions, Image} from 'react-native';

import {Screen} from '@components';
import {AppScreenProps} from '@routes';

const IMAGE_WIDTH = Dimensions.get('screen').width;

export const PublishPostScreen = ({}: AppScreenProps<'PublishPostScreen'>) => {
  return (
    <Screen scrollable canGoBack title="Novo Post">
      <Image
        source={{uri: 'https://via.placeholder.com/150'}}
        style={{width: IMAGE_WIDTH, height: IMAGE_WIDTH}}
      />
    </Screen>
  );
};
