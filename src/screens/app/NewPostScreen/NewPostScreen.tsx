import React, {useCallback, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
} from 'react-native';

import {Screen} from '@components';
import {AppTabScreenProps} from '@routes';
import {useCameraRoll} from '@services';

import {Header} from './components';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLUMNS = 4;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;

export const NewPostScreen = ({}: AppTabScreenProps<'NewPostScreen'>) => {
  const flatListRef = useRef<FlatList>(null);
  const [selectedImage, setSelectedImage] = useState<string>();
  const {photoList, fetchNextPage} = useCameraRoll(true, setSelectedImage);

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
  );
};
