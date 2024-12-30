import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, PressableBox, Text} from '@components';

import {ProfileMetadataProps} from './ProfileMetadataProps';

export const ProfileMetadata = ({
  followersCount,
  followingCount,
  publicationsCount,
  isMyProfile,
}: ProfileMetadataProps) => {
  const {navigate} = useNavigation();

  const items: ItemType[] = [
    {label: 'Publicações', value: publicationsCount},
    {
      label: 'Seguidores',
      value: followersCount,
      onPress: () => navigate('MyFollowersScreen'),
    },
    {
      label: 'Seguindo',
      value: followingCount,
      onPress: () => navigate('MyFollowingScreen'),
    },
  ];

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      mt="s24"
      columnGap="s32">
      {items.map(item => (
        <Item isMyProfile={isMyProfile} key={item.label} {...item} />
      ))}
    </Box>
  );
};

type ItemType = {
  label: string;
  value: string;
  onPress?: () => void;
};

const Item = ({
  label,
  value,
  onPress,
  isMyProfile,
}: ItemType & {isMyProfile?: boolean}) => {
  return (
    <PressableBox alignItems="center" onPress={onPress} disabled={!isMyProfile}>
      <Text preset="headingSmall">{value}</Text>
      <Text preset="paragraphSmall">{label}</Text>
    </PressableBox>
  );
};
