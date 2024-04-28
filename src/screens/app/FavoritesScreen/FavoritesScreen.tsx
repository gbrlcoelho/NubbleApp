import React, {useCallback} from 'react';
import {Image, ListRenderItem} from 'react-native';

import {PostReaction} from 'src/domain/PostReaction/postReactionTypes';

import {InfinityScrollList, Screen} from '@components';
import {postReactionService} from '@domain';
import {QueryKeys} from '@infra';
import {AppTabScreenProps} from '@routes';

export const FavoritesScreen = ({}: AppTabScreenProps<'FavoritesScreen'>) => {
  const renderItem: ListRenderItem<PostReaction> = useCallback(({item}) => {
    return (
      <Image
        source={{uri: item.post.imageURL}}
        style={{width: 300, height: 300}}
      />
    );
  }, []);

  return (
    <Screen canGoBack>
      <InfinityScrollList
        queryKey={QueryKeys.FavoriteList}
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
