import React from 'react';

import {Button, Screen} from '@components';
import {useAuthSignOut} from '@domain';
import {AppScreenProps} from '@routes';

export const SettingsScreen = ({}: AppScreenProps<'SettingsScreen'>) => {
  const {signOut, isLoading} = useAuthSignOut();

  return (
    <Screen canGoBack title="Configurações">
      <Button title="Sair da conta" onPress={signOut} loading={isLoading} />
    </Screen>
  );
};
