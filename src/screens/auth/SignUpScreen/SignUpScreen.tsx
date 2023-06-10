import {
  Button,
  PasswordInput,
  Screen,
  Text,
  TextInput,
} from '@components/index';
import React from 'react';

export const SignUpScreen = () => {
  const submitForm = () => {
    // TODO: implementar
  };
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>
      <TextInput
        label="Seu username"
        placeholder="@"
        boxProps={{marginBottom: 's20'}}
      />
      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{marginBottom: 's20'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{marginBottom: 's20'}}
      />

      <Button title="Criar minha conta" onPress={submitForm} />
    </Screen>
  );
};
