import React from 'react';

import {Screen} from '@components';
import {useUserGetById} from '@domain';
import {AppScreenProps} from '@routes';

import {EditProfileHeader} from './components';

export const EditProfileScreen = ({
  route,
}: AppScreenProps<'EditProfileScreen'>) => {
  const userId = route.params.userId;
  const {user} = useUserGetById(userId);

  return (
    <Screen canGoBack scrollable title="Editar Perfil">
      <EditProfileHeader user={user} />
    </Screen>
  );
};
