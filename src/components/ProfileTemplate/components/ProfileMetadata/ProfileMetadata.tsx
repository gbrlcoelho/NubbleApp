import React from 'react';

import {Box, Text} from '@components';

import {ProfileMetadataProps} from './ProfileMetadataProps';

export const ProfileMetadata = ({
  followersCount,
  followingCount,
  publicationsCount,
}: ProfileMetadataProps) => {
  const items: ItemType[] = [
    {label: 'Publicações', value: publicationsCount},
    {label: 'Seguidores', value: followersCount},
    {label: 'Seguindo', value: followingCount},
  ];

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      mt="s24"
      columnGap="s32">
      {items.map(item => (
        <Item key={item.label} {...item} />
      ))}
    </Box>
  );
};

type ItemType = {
  label: string;
  value: string;
};

const Item = ({label, value}: ItemType) => {
  return (
    <Box alignItems="center">
      <Text preset="headingSmall">{value}</Text>
      <Text preset="paragraphSmall">{label}</Text>
    </Box>
  );
};
