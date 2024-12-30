import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Button, ButtonProps} from '@components';
import {useFollowUser} from '@domain';

import {ButtonVariants, ProfileButtonProps} from './ProfileButtonProps';

const buttonVariants: Record<
  ButtonVariants,
  Pick<ButtonProps, 'title' | 'preset' | 'loading'>
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
  loading: {
    title: 'Carregando...',
    preset: 'outline',
    loading: true,
  },
};

export const ProfileButton = ({
  isFollowing,
  isMyProfile,
  userId,
}: ProfileButtonProps) => {
  const {followUser, isLoading} = useFollowUser();
  const {navigate} = useNavigation();

  const variant = getVariant({isFollowing, isMyProfile, isLoading});
  const buttonProps = buttonVariants[variant];

  const handleOnPress = () => {
    switch (variant) {
      case 'isFollowing':
        return; // navigate('ChatScreen', {userId});

      case 'isNotFollowing':
        return followUser(userId);

      case 'myProfile':
        return navigate('EditProfileScreen', {userId});

      default:
        break;
    }
  };

  return (
    <Button onPress={handleOnPress} marginVertical="s24" {...buttonProps} />
  );
};

const getVariant = ({
  isFollowing,
  isMyProfile,
  isLoading,
}: Pick<ProfileButtonProps, 'isFollowing' | 'isMyProfile'> & {
  isLoading: boolean;
}): ButtonVariants => {
  if (isLoading) {
    return 'loading';
  }

  if (isMyProfile) {
    return 'myProfile';
  }

  return isFollowing ? 'isFollowing' : 'isNotFollowing';
};
