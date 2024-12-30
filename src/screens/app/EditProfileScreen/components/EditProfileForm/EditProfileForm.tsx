import React, {forwardRef, useEffect, useImperativeHandle} from 'react';
import {View} from 'react-native';

import {useAsyncValidation} from '@form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import {ActivityIndicator, FormTextInput} from '@components';
import {authService, useUserUpdate} from '@domain';

import {EditProfileSchema, editProfileSchema} from '../../editProfileSchema';

import {EditProfileFormProps, EditProfileFormRef} from './EditProfileFormProps';

const EditProfileFormComponent = (
  {user, onChangeIsValid, onChangeIsLoading}: EditProfileFormProps,
  ref: React.Ref<EditProfileFormRef>,
) => {
  const {goBack} = useNavigation();

  const {isLoading, updateUser} = useUserUpdate({
    onSuccess: () => {
      goBack();
    },
  });

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

  useEffect(() => {
    onChangeIsLoading(isLoading);
  }, [isLoading, onChangeIsLoading]);

  useImperativeHandle(ref, () => ({
    onSubmit: () => handleSubmit(formValues => updateUser(formValues))(),
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
