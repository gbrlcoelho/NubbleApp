import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Icon, ProfileUser, Screen, TextInput} from '@components';
import {User, useUserSearch} from '@domain';
import {useDebounce} from '@hooks';
import {AppScreenProps} from '@routes';

export const SearchScreen = ({}: AppScreenProps<'SearchScreen'>) => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);

  const {list} = useUserSearch(debouncedSearch);

  const renderItem = ({item}: ListRenderItemInfo<User>) => {
    return <ProfileUser user={item} />;
  };

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
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Screen>
  );
};
