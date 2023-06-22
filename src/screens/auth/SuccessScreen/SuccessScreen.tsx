import React from 'react';

import {Button, Icon, Screen, Text} from '@components';
import {AuthScreenProps} from '@routes';

export const SuccessScreen = ({
  navigation,
  route,
}: AuthScreenProps<'SuccessScreen'>) => {
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
