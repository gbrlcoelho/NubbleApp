import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ListRenderItem, StyleProp, ViewStyle} from 'react-native';

import {PostItem, Screen} from '@components';
import {Post, postService} from '@domain';
import {AppTabScreenProps} from '@routes';

import {HomeHeader} from './components/HomeHeader/HomeHeader';

export const HomeScreen = ({}: AppTabScreenProps<'HomeScreen'>) => {
  const [postList, setPostList] = useState<Post[]>([]);

  const renderItem: ListRenderItem<Post> = useCallback(({item}) => {
    return <PostItem post={item} />;
  }, []);

  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  return (
    <Screen style={$screen}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HomeHeader />}
      />
    </Screen>
  );
};

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
