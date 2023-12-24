import React, {useCallback, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Icon, ProfileUser, Screen, TextInput} from '@components';
import {User, useUserSearch} from '@domain';
import {useDebounce} from '@hooks';
import {AppScreenProps} from '@routes';
import {useSearchHistoryService} from '@services';

import {SearchHistory} from './components/SearchHistory';

export const SearchScreen = ({}: AppScreenProps<'SearchScreen'>) => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const {addUser} = useSearchHistoryService();

  const {list} = useUserSearch(debouncedSearch);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<User>) => {
      return (
        <ProfileUser
          user={item}
          onPress={() => addUser(item)}
          avatarProps={{size: 48}}
        />
      );
    },
    [addUser],
  );

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          placeholder="Digite sua busca"
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon name="search" color="gray3" />}
        />
      }>
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </Screen>
  );
};
