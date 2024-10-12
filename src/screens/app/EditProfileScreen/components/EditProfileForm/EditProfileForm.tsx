import React, {forwardRef, useEffect, useImperativeHandle} from 'react';
import {View} from 'react-native';

import {useAsyncValidation} from '@form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {ActivityIndicator, FormTextInput} from '@components';
import {authService} from '@domain';

import {EditProfileSchema, editProfileSchema} from '../../editProfileSchema';

import {EditProfileFormProps, EditProfileFormRef} from './EditProfileFormProps';

const EditProfileFormComponent = (
  {user, onChangeIsValid}: EditProfileFormProps,
  ref: React.Ref<EditProfileFormRef>,
) => {
  const {control, watch, getFieldState, formState, handleSubmit} =
    useForm<EditProfileSchema>({
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

  useEffect(() => {
    onChangeIsValid(formState.isValid && !usernameValidation.notReady);
  }, [formState.isValid, usernameValidation.notReady, onChangeIsValid]);

  useImperativeHandle(ref, () => ({
    onSubmit: () => handleSubmit(formValues => console.log(formValues))(),
  }));

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

export const EditProfileForm = forwardRef(EditProfileFormComponent);
