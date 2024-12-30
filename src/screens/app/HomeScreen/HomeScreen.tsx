import React, {useCallback} from 'react';
import {ListRenderItem, StyleProp, ViewStyle} from 'react-native';

import {InfinityScrollList, PostItem, Screen} from '@components';
import {Post, postService} from '@domain';
import {QueryKeys} from '@infra';
import {AppTabScreenProps} from '@routes';

import {HomeHeader} from './components';

export const HomeScreen = ({}: AppTabScreenProps<'HomeScreen'>) => {
  const renderItem: ListRenderItem<Post> = useCallback(({item}) => {
    return <PostItem post={item} />;
  }, []);

  return (
    <Screen style={$screen}>
      <InfinityScrollList
        renderItem={renderItem}
        queryKey={[QueryKeys.PostList]}
        getList={postService.getList}
        flatListProps={{ListHeaderComponent: <HomeHeader />}}
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
