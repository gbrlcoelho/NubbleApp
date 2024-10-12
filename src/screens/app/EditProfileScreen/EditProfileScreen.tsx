import React, {useRef, useState} from 'react';

import {Button, Screen} from '@components';
import {useUserGetById} from '@domain';
import {AppScreenProps} from '@routes';

import {EditProfileForm, EditProfileHeader} from './components';
import {EditProfileFormRef} from './components/EditProfileForm/EditProfileFormProps';

export const EditProfileScreen = ({
  route,
}: AppScreenProps<'EditProfileScreen'>) => {
  const userId = route.params.userId;
  const {user} = useUserGetById(userId);

  const [formIsValid, setFormIsValid] = useState(false);

  const formRef = useRef<EditProfileFormRef>(null);

  const submitForm = () => {
    formRef.current?.onSubmit();
  };

  return (
    <Screen canGoBack scrollable title="Editar Perfil">
      <EditProfileHeader user={user} mb="s24" />
      {user && (
        <EditProfileForm
          user={user}
          onChangeIsValid={setFormIsValid}
          ref={formRef}
        />
      )}

      <Button
        mt="s40"
        title="Salvar Alterações"
        onPress={submitForm}
        disabled={!formIsValid}
      />
    </Screen>
  );
};
