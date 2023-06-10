import {
  Button,
  PasswordInput,
  Screen,
  Text,
  TextInput,
} from '@components/index';
import React from 'react';

export const LoginScreen = () => {
  return (
    <Screen>
      <Text preset="headingLarge" marginBottom="s8">
        Olá!
      </Text>
      <Text preset="paragraphLarge" marginBottom="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's20'}}
        errorMessage="E-mail inválido"
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{marginBottom: 's10'}}
      />
      <Text preset="paragraphSmall" bold color="primary">
        Esqueci minha senha
      </Text>
      <Button title="Entrar" marginTop="s48" />

      <Button preset="outline" title="Criar conta" marginTop="s12" />
    </Screen>
  );
};
