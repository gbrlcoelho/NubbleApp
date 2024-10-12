import React from 'react';

import {Button, Screen} from '@components';
import {useUserGetById} from '@domain';
import {AppScreenProps} from '@routes';

import {EditProfileForm, EditProfileHeader} from './components';

export const EditProfileScreen = ({
  route,
}: AppScreenProps<'EditProfileScreen'>) => {
  const userId = route.params.userId;
  const {user} = useUserGetById(userId);

  const submitForm = () => {
    // TODO: implement submit form
  };

  return (
    <Screen canGoBack scrollable title="Editar Perfil">
      <EditProfileHeader user={user} />
      {user && <EditProfileForm user={user} />}

      <Button mt="s40" title="Salvar Alterações" onPress={submitForm} />
    </Screen>
  );
};
