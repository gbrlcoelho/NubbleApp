import {Button, Icon, Screen, Text} from '@components';
import React from 'react';
import {SuccessScreenProps} from './SuccessScreenProps';

export const SuccessScreen = ({navigation, route}: SuccessScreenProps) => {
  const goBackToTheBeginning = () => {
    navigation.goBack();
  };

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" marginTop="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" marginTop="s16">
        {route.params.description}
      </Text>

      <Button
        title="Voltar ao início"
        onPress={goBackToTheBeginning}
        marginTop="s40"
      />
    </Screen>
  );
};
