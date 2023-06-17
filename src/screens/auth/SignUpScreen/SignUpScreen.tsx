import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {zodResolver} from '@hookform/resolvers/zod';
import {useResetNavigationSuccess} from '@hooks';
import React from 'react';
import {useForm} from 'react-hook-form';
import {SignUpScreenProps} from './SignUpScreenProps';
import {SignUpSchema, signUpSchema} from './signUpSchema';

export const SignUpScreen = ({}: SignUpScreenProps) => {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const submitForm = (formValues: SignUpSchema) => {
    console.log(formValues);

    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {name: 'checkRound', color: 'success'},
    });
  };

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
      />

      <FormTextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{marginBottom: 's20'}}
        autoCapitalize="words"
        control={control}
        name="fullName"
      />

      <FormTextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's20'}}
        control={control}
        name="email"
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
        disabled={!formState.isValid}
      />
    </Screen>
  );
};
