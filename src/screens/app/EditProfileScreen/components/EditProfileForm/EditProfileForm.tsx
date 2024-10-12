import React from 'react';
import {View} from 'react-native';

import {useAsyncValidation} from '@form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {ActivityIndicator, FormTextInput} from '@components';
import {authService} from '@domain';

import {EditProfileSchema, editProfileSchema} from '../../editProfileSchema';

import {EditProfileFormProps} from './EditProfileFormProps';

export const EditProfileForm = ({user}: EditProfileFormProps) => {
  const {control, watch, getFieldState} = useForm<EditProfileSchema>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      username: user?.username,
      firstName: user?.firstName,
      lastName: user?.lastName,
    },
    mode: 'onChange',
  });

  const usernameValidation = useAsyncValidation({
    watch,
    getFieldState,
    fieldName: 'username',
    errorMessage: 'username indisponível',
    isAvailableFunc: authService.isUserNameAvailable,
  });

  return (
    <View>
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
    </View>
  );
};
