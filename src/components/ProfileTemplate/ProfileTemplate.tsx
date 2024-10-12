import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  Image,
  ListRenderItem,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {InfinityScrollList, Screen} from '@components';
import {Post, postService, useUserGetById} from '@domain';
import {useAppNavigation} from '@hooks';
import {QueryKeys} from '@infra';

import {ProfileHeader} from './components/ProfileHeader/ProfileHeader';
import {ProfileTemplateProps} from './ProfileTemplateProps';

const NUM_COLUMNS = 3;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;

export const ProfileTemplate = ({
  userId,
  isMyProfile,
}: ProfileTemplateProps) => {
  const {navigate} = useAppNavigation();
  const {user} = useUserGetById(userId);
  const [publicationsCount, setPublicationsCount] = useState(0);

  const renderItem: ListRenderItem<Post> = useCallback(
    ({item}) => {
      return (
        <Pressable
          onPress={() =>
            navigate.toPostDetails({
              postId: item.id,
              postAuthorId: item.author.id,
            })
          }>
          <Image
            source={{uri: item.imageURL}}
            style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
          />
        </Pressable>
      );
    },
    [navigate],
  );

  const renderListHeader = () => {
    if (!user) {
      return null;
    }

    return (
      <ProfileHeader
        userDetails={user}
        isMyProfile={isMyProfile}
        publicationsCount={publicationsCount.toString()}
      />
    );
  };

  const getPostList = async (page: number) => {
    const response = await postService.getList(page, userId);
    setPublicationsCount(response.meta.total);
    return response;
  };

  return (
    <Screen flex={1} style={$screen}>
      <InfinityScrollList
        queryKey={[QueryKeys.PostList, userId]}
        renderItem={renderItem}
        getList={getPostList}
        flatListProps={{
          ListHeaderComponent: renderListHeader,
          numColumns: NUM_COLUMNS,
        }}
      />
    </Screen>
  );
};

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
};
