import React, {useRef} from 'react';
import {FlatList, RefreshControl} from 'react-native';

import {useScrollToTop} from '@react-navigation/native';

import {usePaginatedList} from '@infra';

import {EmptyList} from './components/EmptyList';
import {
  InfinityScrollListProps,
  ItemTConstraints,
} from './InfinityScrollListProps';

export const InfinityScrollList = <ItemT extends ItemTConstraints>({
  flatListProps,
  emptyListProps,
  queryKey,
  getList,
  renderItem,
}: InfinityScrollListProps<ItemT>) => {
  const flatListRef = useRef<FlatList<ItemT>>(null);
  useScrollToTop(flatListRef);

  const {list, isError, isLoading, refresh, fetchNextPage} = usePaginatedList(
    queryKey,
    getList,
  );

  const contentContainerStyleFlex = list.length === 0 ? 1 : undefined;

  return (
    <FlatList
      ref={flatListRef}
      showsVerticalScrollIndicator={false}
      data={list}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.1}
      refreshing={isLoading}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refresh} />
      }
      ListEmptyComponent={
        <EmptyList
          loading={isLoading}
          error={isError}
          refresh={refresh}
          {...emptyListProps}
        />
      }
      {...flatListProps}
      contentContainerStyle={[
        {flex: contentContainerStyleFlex},
        flatListProps?.contentContainerStyle,
      ]}
    />
  );
};
