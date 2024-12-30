import React from 'react';

import {UserListTemplate} from '@components';
import {followService, useRemoveFollow} from '@domain';
import {QueryKeys} from '@infra';
import {useToastService} from '@services';

export const MyFollowersScreen = () => {
  const {showToast} = useToastService();

  const {removeFollow} = useRemoveFollow({
    onSuccess: () => {
      showToast({
        message: 'Seguidor removido',
        type: 'success',
        position: 'bottom',
      });
    },
    onError: () => {
      showToast({
        message: 'Erro ao remover seguidor',
        type: 'error',
        position: 'bottom',
      });
    },
  });

  return (
    <UserListTemplate
      screenTitle="Seguidores"
      emptyMessage="Você não tem seguidores ainda."
      totalText="seguidores"
      queryKey={QueryKeys.MyFollowersList}
      button={{
        title: 'Remover',
        onPress: ({followId}) => removeFollow({followId}),
      }}
      getUserList={followService.getMyFollowersList}
    />
  );
};
