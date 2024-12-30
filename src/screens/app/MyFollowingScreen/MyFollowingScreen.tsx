import React from 'react';

import {UserListTemplate} from '@components';
import {followService} from '@domain';
import {QueryKeys} from '@infra';

export const MyFollowingScreen = () => {
  return (
    <UserListTemplate
      screenTitle="Seguindo"
      emptyMessage="Você não está seguindo ninguém ainda."
      totalText="seguindo"
      queryKey={QueryKeys.MyFollowingList}
      button={{title: 'Seguindo', onPress: user => console.log(user)}}
      getUserList={followService.getMyFollowingList}
    />
  );
};
