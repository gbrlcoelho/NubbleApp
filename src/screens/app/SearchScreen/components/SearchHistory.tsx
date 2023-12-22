import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Box, ProfileUser, Text} from '@components';
import {User} from '@domain';
import {useSearchHistory} from '@services';

export const SearchHistory = () => {
  const userList = useSearchHistory();

  const renderItem = useCallback(({item}: ListRenderItemInfo<User>) => {
    return <ProfileUser user={item} />;
  }, []);

  return (
    <Box>
      <FlatList
        ListHeaderComponent={
          <Text preset="headingMedium">Buscas recentes</Text>
        }
        data={userList}
        renderItem={renderItem}
      />
    </Box>
  );
};
