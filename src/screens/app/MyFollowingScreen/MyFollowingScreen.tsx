import React from 'react';

import {UserListTemplate} from '@components';
import {followService, useRemoveFollow} from '@domain';
import {QueryKeys} from '@infra';

export const MyFollowingScreen = () => {
  const {removeFollow} = useRemoveFollow();

  return (
    <UserListTemplate
      screenTitle="Seguindo"
      emptyMessage="Você não está seguindo ninguém ainda."
      totalText="seguindo"
      queryKey={QueryKeys.MyFollowingList}
      button={{
        title: 'Seguindo',
        onPress: followUser => removeFollow(followUser.followId),
      }}
      getUserList={followService.getMyFollowingList}
    />
  );
};
