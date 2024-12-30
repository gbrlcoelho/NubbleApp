import React from 'react';

import {UserListTemplate} from '@components';
import {followService, useRemoveFollow} from '@domain';
import {QueryKeys} from '@infra';
import {useToastService} from '@services';

export const MyFollowingScreen = () => {
  const {showToast} = useToastService();

  const {removeFollow, undoRemoveFollow} = useRemoveFollow({
    onSuccess: () => {
      showToast({
        type: 'success',
        message: 'Deixou de seguir',
        position: 'bottom',
        action: {
          title: 'Desfazer',
          onPress: undoRemoveFollow,
        },
      });
    },
    onError: () => {
      showToast({type: 'error', message: 'Erro ao deixar de seguir.'});
    },
  });

  return (
    <UserListTemplate
      screenTitle="Seguindo"
      emptyMessage="Você não está seguindo ninguém ainda."
      totalText="seguindo"
      queryKey={QueryKeys.MyFollowingList}
      button={{
        title: 'Seguindo',
        onPress: followUser =>
          removeFollow({followId: followUser.followId, userId: followUser.id}),
      }}
      getUserList={followService.getMyFollowingList}
    />
  );
};
