import React, {useCallback, useState} from 'react';
import {ListRenderItem} from 'react-native';

import {
  Button,
  InfinityScrollList,
  ProfileUser,
  Screen,
  Text,
} from '@components';
import {FollowUser} from '@domain';

import {UserListTemplateProps} from './UserListTemplateProps';

export const UserListTemplate = ({
  getUserList,
  screenTitle,
  totalText,
  emptyMessage,
  queryKey,
  button,
}: UserListTemplateProps) => {
  const [totalFollowing, setTotalFollowing] = useState<number | null>(null);

  const renderItem: ListRenderItem<FollowUser> = useCallback(
    ({item}) => {
      return (
        <ProfileUser
          user={item}
          RightComponent={
            <Button
              preset="gray"
              title={button.title}
              onPress={() => button.onPress(item)}
            />
          }
        />
      );
    },
    [button],
  );

  const renderListHeader = () => {
    if (!totalFollowing) {
      return null;
    }

    return (
      <Text semiBold preset="paragraphSmall" color="primary" marginBottom="s24">
        {totalFollowing} {totalText}
      </Text>
    );
  };

  const getList = async (page: number) => {
    const response = await getUserList(page);
    setTotalFollowing(response.meta.total);
    return response;
  };

  return (
    <Screen flex={1} title={screenTitle} canGoBack>
      <InfinityScrollList
        queryKey={[queryKey]}
        getList={getList}
        renderItem={renderItem}
        flatListProps={{
          ListHeaderComponent: renderListHeader,
        }}
        emptyListProps={{
          emptyMessage,
          errorMessage: 'Erro ao carregar lista',
        }}
      />
    </Screen>
  );
};
