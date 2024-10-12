import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, FormPasswordInput, Screen} from '@components';
import {useAuthUpdatePassword} from '@domain';
import {AppScreenProps} from '@routes';
import {useToastService} from '@services';

import {EditPasswordSchema, editPasswordSchema} from './editPasswordSchema';

export const EditPasswordScreen =
  ({}: AppScreenProps<'EditPasswordScreen'>) => {
    const {showToast} = useToastService();
    const {isLoading, updatePassword} = useAuthUpdatePassword({
      onError: message => showToast({type: 'error', message}),
    });

    const {control, formState, handleSubmit} = useForm<EditPasswordSchema>({
      resolver: zodResolver(editPasswordSchema),
      mode: 'onChange',
    });

    return (
      <Screen canGoBack scrollable title="Alterar Senha">
        <FormPasswordInput
          label="Senha Atual"
          placeholder="Digite sua senha atual"
          control={control}
          name="currentPassword"
          boxProps={{mb: 's20'}}
        />

        <FormPasswordInput
          label="Nova Senha"
          placeholder="Digite sua nova senha"
          control={control}
          name="newPassword"
          boxProps={{mb: 's20'}}
        />

        <FormPasswordInput
          label="Confirmar Senha"
          placeholder="Confirme sua nova senha"
          control={control}
          name="confirmedNewPassword"
          boxProps={{mb: 's20'}}
        />

        <Button
          title="Salvar Alterações"
          disabled={!formState.isValid}
          loading={isLoading}
          onPress={handleSubmit(updatePassword)}
          mt="s40"
        />
      </Screen>
    );
  };
