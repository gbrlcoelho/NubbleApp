import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Button, ButtonProps} from '@components';

import {ButtonVariants, ProfileButtonProps} from './ProfileButtonProps';

const buttonVariants: Record<
  ButtonVariants,
  Pick<ButtonProps, 'title' | 'preset'>
> = {
  myProfile: {
    title: 'Editar Perfil',
    preset: 'gray',
  },

  isFollowing: {
    title: 'Mensagem',
    preset: 'primary',
  },

  isNotFollowing: {
    title: 'Seguir',
    preset: 'outline',
  },
};

export const ProfileButton = ({
  isFollowing,
  isMyProfile,
  userId,
}: ProfileButtonProps) => {
  const {navigate} = useNavigation();
  const variant = getVariant({isFollowing, isMyProfile});
  const buttonProps = buttonVariants[variant];

  const handleOnPress = () => {
    if (isMyProfile) {
      navigate('EditProfileScreen', {userId});
    }
  };

  return (
    <Button onPress={handleOnPress} marginVertical="s24" {...buttonProps} />
  );
};

const getVariant = ({
  isFollowing,
  isMyProfile,
}: Pick<ProfileButtonProps, 'isFollowing' | 'isMyProfile'>): ButtonVariants => {
  if (isMyProfile) {
    return 'myProfile';
  }

  return isFollowing ? 'isFollowing' : 'isNotFollowing';
};
