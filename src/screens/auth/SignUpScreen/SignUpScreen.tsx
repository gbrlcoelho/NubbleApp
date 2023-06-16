import {Button, PasswordInput, Screen, Text, TextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {SignUpFormType, SignUpScreenProps} from './SignUpScreenProps';

export const SignUpScreen = ({}: SignUpScreenProps) => {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const submitForm = (formValues: SignUpFormType) => {
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
      <Controller
        control={control}
        name="username"
        rules={{
          required: 'Username é obrigatório',
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="Seu username"
            placeholder="@"
            boxProps={{marginBottom: 's20'}}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="fullName"
        rules={{
          required: 'Nome completo é obrigatório',
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="Nome completo"
            placeholder="Digite seu nome completo"
            boxProps={{marginBottom: 's20'}}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail é obrigatório',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'E-mail inválido',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{marginBottom: 's20'}}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha é obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{marginBottom: 's48'}}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Button
        disabled={!formState.isValid}
        title="Criar minha conta"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
};
