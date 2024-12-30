import React from 'react';

import {useAsyncValidation} from '@form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  ActivityIndicator,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {authService, useAuthSignUp} from '@domain';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {SignUpSchema, signUpSchema} from './signUpSchema';

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {name: 'checkRound', color: 'success'},
};

const defaultValues: SignUpSchema = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const SignUpScreen = ({}: AuthScreenProps<'SignUpScreen'>) => {
  const {reset} = useResetNavigationSuccess();
  const {signUp, isLoading} = useAuthSignUp({
    onSuccess: () => reset(resetParam),
    onError: () => {},
  });

  const {control, formState, handleSubmit, watch, getFieldState} =
    useForm<SignUpSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues,
      mode: 'onChange',
    });

  const submitForm = (formValues: SignUpSchema) => {
    signUp(formValues);
  };

  const usernameValidation = useAsyncValidation({
    watch,
    getFieldState,
    fieldName: 'username',
    errorMessage: 'username indisponível',
    isAvailableFunc: authService.isUserNameAvailable,
  });

  const emailValidation = useAsyncValidation({
    watch,
    getFieldState,
    fieldName: 'email',
    errorMessage: 'email indisponível',
    isAvailableFunc: authService.isEmailAvailable,
  });

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>
      <FormTextInput
        label="Seu username"
        placeholder="@"
        boxProps={{marginBottom: 's20'}}
        control={control}
        name="username"
        RightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
        errorMessage={usernameValidation.errorMessage}
      />

      <FormTextInput
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{marginBottom: 's20'}}
        autoCapitalize="words"
        control={control}
        name="firstName"
      />

      <FormTextInput
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{marginBottom: 's20'}}
        autoCapitalize="words"
        control={control}
        name="lastName"
      />

      <FormTextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's20'}}
        control={control}
        name="email"
        RightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
        errorMessage={emailValidation.errorMessage}
      />

      <FormPasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{marginBottom: 's48'}}
        control={control}
        name="password"
      />

      <Button
        title="Criar minha conta"
        onPress={handleSubmit(submitForm)}
        disabled={
          !formState.isValid ||
          usernameValidation.notReady ||
          emailValidation.notReady
        }
        loading={isLoading}
      />
    </Screen>
  );
};
