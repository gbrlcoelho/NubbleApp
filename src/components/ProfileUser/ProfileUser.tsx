import React from 'react';
import {GestureResponderEvent} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {PressableBox, ProfileAvatar, Text} from '@components';

import {ProfileUserProps} from './ProfileUserProps';

export const ProfileUser = ({
  user,
  onPress,
  ...pressableBoxProps
}: ProfileUserProps) => {
  const {navigate} = useNavigation();

  const handleOnPress = (event: GestureResponderEvent) => {
    if (onPress) {
      onPress(event);
    }
    navigate('ProfileScreen', {userId: user.id});
  };

  return (
    <PressableBox
      flexDirection="row"
      alignItems="center"
      marginBottom="s16"
      onPress={handleOnPress}
      {...pressableBoxProps}>
      <ProfileAvatar imageURL={user.profileUrl} />
      <Text marginLeft="s12" preset="paragraphMedium" semiBold>
        {user.username}
      </Text>
    </PressableBox>
  );
};
