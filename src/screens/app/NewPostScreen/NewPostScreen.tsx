import React, {useCallback, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
} from 'react-native';

import {PermissionManager, Screen} from '@components';
import {AppTabScreenProps} from '@routes';
import {useMultimediaGetPhotos, usePermission} from '@services';

import {Header} from './components';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLUMNS = 4;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;

export const NewPostScreen = ({}: AppTabScreenProps<'NewPostScreen'>) => {
  const flatListRef = useRef<FlatList>(null);
  const [selectedImage, setSelectedImage] = useState<string>();

  const {status} = usePermission('photoLibrary');
  const {photoList, fetchNextPage} = useMultimediaGetPhotos(
    status === 'granted',
    setSelectedImage,
  );

  const renderItem: ListRenderItem<string> = useCallback(({item}) => {
    const onSelectImage = () => {
      setSelectedImage(item);
      flatListRef.current?.scrollToOffset({offset: 0, animated: true});
    };

    return (
      <Pressable onPress={onSelectImage}>
        <Image
          source={{uri: item}}
          style={{
            width: ITEM_WIDTH,
            height: ITEM_WIDTH,
          }}
        />
      </Pressable>
    );
  }, []);

  return (
    <PermissionManager
      permissionName="photoLibrary"
      description="Permita o Nubble acessar as imagens da sua galeria">
      <Screen canGoBack title="Novo post" noPaddingHorizontal>
        <FlatList
          ref={flatListRef}
          data={photoList}
          keyExtractor={item => item}
          renderItem={renderItem}
          numColumns={4}
          ListHeaderComponent={
            <Header imageWidth={SCREEN_WIDTH} imageUri={selectedImage} />
          }
          onEndReachedThreshold={0.1}
          onEndReached={fetchNextPage}
        />
      </Screen>
    </PermissionManager>
  );
};
