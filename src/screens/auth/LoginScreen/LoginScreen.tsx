import {Button, PasswordInput, Screen, Text, TextInput} from '@components';
import React from 'react';
import {LoginScreenProps} from './LoginScreenProps';

export const LoginScreen = ({navigation}: LoginScreenProps) => {
  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  const navigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

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
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{marginBottom: 's10'}}
      />
      <Text
        onPress={navigateToForgotPasswordScreen}
        preset="paragraphSmall"
        bold
        color="primary">
        Esqueci minha senha
      </Text>
      <Button title="Entrar" marginTop="s48" />

      <Button
        preset="outline"
        title="Criar conta"
        marginTop="s12"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
};
