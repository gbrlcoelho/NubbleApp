import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Box, Icon, ProfileUser, Text} from '@components';
import {User} from '@domain';
import {useSearchHistory, useSearchHistoryService} from '@services';

export const SearchHistory = () => {
  const userList = useSearchHistory();
  const {removeUser} = useSearchHistoryService();

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<User>) => {
      return (
        <ProfileUser
          user={item}
          avatarProps={{size: 48}}
          RightComponent={
            <Icon
              color="primary"
              name="trash"
              onPress={() => removeUser(item.id)}
            />
          }
        />
      );
    },
    [removeUser],
  );

  return (
    <Box>
      <FlatList
        ListHeaderComponent={
          <Text marginBottom="s16" preset="headingMedium">
            Buscas recentes
          </Text>
        }
        data={userList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Box>
  );
};
