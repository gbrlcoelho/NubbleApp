import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Screen, Text} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

export const ForgotPasswordScreen =
  ({}: AuthScreenProps<'ForgotPasswordScreen'>) => {
    const {reset} = useResetNavigationSuccess();
    const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
      resolver: zodResolver(forgotPasswordSchema),
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
    });

    const submitForm = () => {
      reset({
        title: `Enviamos as instruções ${'\n'}para seu e-mail`,
        description:
          'Clique no link enviado no seu e-mail para recuperar sua senha',
        icon: {
          name: 'messageRound',
          color: 'primary',
        },
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
        <FormTextInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{marginBottom: 's40'}}
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

        <Button
          title="Recuperar senha"
          onPress={handleSubmit(submitForm)}
          disabled={!formState.isValid}
        />
      </Screen>
    );
  };
