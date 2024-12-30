import React from 'react';

import {UserListTemplate} from '@components';
import {followService} from '@domain';
import {QueryKeys} from '@infra';

export const MyFollowersScreen = () => {
  return (
    <UserListTemplate
      screenTitle="Seguidores"
      emptyMessage="Você não tem seguidores ainda."
      totalText="seguidores"
      queryKey={QueryKeys.MyFollowersList}
      button={{
        title: 'Remover',
        onPress: followUser => console.log(followUser),
      }}
      getUserList={followService.getMyFollowersList}
    />
  );
};
