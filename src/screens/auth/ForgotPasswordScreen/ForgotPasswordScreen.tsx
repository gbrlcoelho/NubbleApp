import {Button, Screen, Text, TextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import React from 'react';
import {ForgotPasswordScreenProps} from './ForgotPasswordScreenProps';

export const ForgotPasswordScreen = ({}: ForgotPasswordScreenProps) => {
  const {reset} = useResetNavigationSuccess();

  const submitForm = () => {
    // TODO: implementar
    reset({
      title: `Enviamos as ${'\n'}instruções para seu e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {name: 'messageRound', color: 'primary'},
    });
  };

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" marginBottom="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's40'}}
      />

      <Button title="Recuperar senha" onPress={submitForm} />
    </Screen>
  );
};
