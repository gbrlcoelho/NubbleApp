import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {useAuthSignIn} from '@domain';
import {AuthScreenProps} from '@routes';
import {useToastService} from '@services';

import {LoginSchema, loginSchema} from './loginSchema';

export const LoginScreen = ({navigation}: AuthScreenProps<'LoginScreen'>) => {
  const {showToast} = useToastService();
  const {signIn, isLoading} = useAuthSignIn({
    onError: message => showToast({type: 'error', message}),
  });
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const submitForm = ({email, password}: LoginSchema) => {
    signIn({email, password});
  };

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
      <FormTextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's20'}}
        control={control}
        name="email"
        rules={{
          required: 'E-mail é obrigatório',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'E-mail inválido',
          },
        }}
      />

      <FormPasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{marginBottom: 's10'}}
        control={control}
        name="password"
        rules={{
          required: 'Senha é obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
      />
      <Text
        onPress={navigateToForgotPasswordScreen}
        preset="paragraphSmall"
        bold
        color="primary">
        Esqueci minha senha
      </Text>
      <Button
        title="Entrar"
        marginTop="s48"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        loading={isLoading}
      />

      <Button
        preset="outline"
        title="Criar conta"
        marginTop="s12"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
};
