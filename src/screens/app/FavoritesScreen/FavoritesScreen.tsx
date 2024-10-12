import React, {useCallback} from 'react';
import {Dimensions, Image, ListRenderItem} from 'react-native';

import {PostReaction} from 'src/domain/PostReaction/postReactionTypes';

import {InfinityScrollList, PressableBox, Screen, Text} from '@components';
import {postReactionService} from '@domain';
import {useAppNavigation} from '@hooks';
import {QueryKeys} from '@infra';

const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_PADDING = 24;
const GAP = 16;

const ITEM_WIDTH = (SCREEN_WIDTH - GAP - SCREEN_PADDING * 2) / NUM_COLUMNS;

export const FavoritesScreen = () => {
  const {navigate} = useAppNavigation();

  const renderItem: ListRenderItem<PostReaction> = useCallback(
    ({item}) => {
      return (
        <PressableBox
          onPress={() =>
            navigate.toPostDetails({
              postId: item.postId,
              postAuthorId: item.author.id,
            })
          }>
          <Image
            source={{uri: item.post.imageURL}}
            style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
          />
          <Text marginTop="s4" semiBold>
            {item.author.username}
          </Text>
        </PressableBox>
      );
    },
    [navigate],
  );

  return (
    <Screen title="Favoritos">
      <InfinityScrollList
        queryKey={[QueryKeys.FavoriteList]}
        flatListProps={{
          numColumns: NUM_COLUMNS,
          columnWrapperStyle: {columnGap: GAP},
          contentContainerStyle: {rowGap: SCREEN_PADDING},
        }}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        renderItem={renderItem}
        emptyListProps={{
          emptyMessage: 'Não há favoritos 😥',
          errorMessage: 'Erro ao carregar favoritos 😥',
        }}
      />
    </Screen>
  );
};
