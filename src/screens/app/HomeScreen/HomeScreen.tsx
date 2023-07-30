import React, {useCallback, useRef} from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {useScrollToTop} from '@react-navigation/native';

import {PostItem, Screen} from '@components';
import {Post, usePostList} from '@domain';
import {AppTabScreenProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty/HomeEmpty';
import {HomeHeader} from './components/HomeHeader/HomeHeader';

export const HomeScreen = ({}: AppTabScreenProps<'HomeScreen'>) => {
  const flatlistRef = useRef<FlatList<Post>>(null);
  useScrollToTop(flatlistRef);
  const {
    list: postList,
    error,
    loading,
    refresh,
    fetchNextPage,
  } = usePostList();

  const contentContainerStyleFlex = postList.length === 0 ? 1 : undefined;

  const renderItem: ListRenderItem<Post> = useCallback(({item}) => {
    return <PostItem post={item} />;
  }, []);

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatlistRef}
        data={postList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: contentContainerStyleFlex}}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshing={loading}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty loading={loading} error={error} refresh={refresh} />
        }
      />
    </Screen>
  );
};

const $screen: StyleProp<ViewStyle> = {
  flex: 1,
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
