import React, {useState} from 'react';
import {Dimensions, FlexStyle, Image} from 'react-native';

import {Button, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';

const IMAGE_WIDTH = Dimensions.get('screen').width / 2;
const ALIGN_SELF: FlexStyle['alignSelf'] = 'center';
const MARGIN_TOP = 20;

export const PublishPostScreen = ({
  route,
}: AppScreenProps<'PublishPostScreen'>) => {
  const {imageUri} = route.params;
  const [description, setDescription] = useState('');

  return (
    <Screen scrollable canGoBack title="Novo Post">
      <Image
        source={{uri: imageUri}}
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_WIDTH,
          alignSelf: ALIGN_SELF,
          marginTop: MARGIN_TOP,
        }}
      />
      <Text preset="headingSmall" marginTop="s32" marginBottom="s10">
        Escreva uma legenda
      </Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Digite aqui..."
        containerProps={{borderWidth: 0}}
      />
      <Button title="Publicar post" marginTop="s56" />
    </Screen>
  );
};
