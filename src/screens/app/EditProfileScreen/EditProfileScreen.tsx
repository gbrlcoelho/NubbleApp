import React, {useRef, useState} from 'react';

import {Button, InputButton, Screen} from '@components';
import {useUserGetById} from '@domain';
import {AppScreenProps} from '@routes';

import {EditProfileForm, EditProfileHeader} from './components';
import {EditProfileFormRef} from './components/EditProfileForm/EditProfileFormProps';

export const EditProfileScreen = ({
  route,
  navigation,
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

      {user && (
        <>
          <InputButton
            label="E-mail"
            value={user?.email}
            mb="s16"
            onPress={() =>
              navigation.navigate('EditEmailScreen', {
                userId: route.params.userId,
              })
            }
          />
          <InputButton
            label="Senha"
            value="•••••••"
            onPress={() =>
              navigation.navigate('EditPasswordScreen', {
                userId: route.params.userId,
              })
            }
          />
        </>
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
