import {Platform} from 'react-native';

import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {SaveFormat, manipulateAsync} from 'expo-image-manipulator';

import {ImageForUpload, PhotoListPaginated} from './multimediaTypes';

const getPhotos = async (cursor?: string): Promise<PhotoListPaginated> => {
  const photoPage = await CameraRoll.getPhotos({first: 12, after: cursor});
  const uriList = photoPage.edges.map(edge => edge.node.image.uri);

  return {
    photoList: uriList,
    cursor: photoPage.page_info.end_cursor,
    hasNextPage: photoPage.page_info.has_next_page,
  };
};

/**
 * Prepare image uri for upload
 * @param imageUri image path as provided by either camera or gallery modules
 *
 * @returns an imageUri ready to be used in the `Image` component and `FormData` requests
 */
const prepareImageUri = (imageUri: string): string => {
  if (Platform.OS !== 'android') {
    return imageUri;
  }

  if (imageUri.startsWith('file://')) {
    return imageUri;
  }

  return `file://${imageUri}`;
};

/**
 * Prepare image for upload
 * @param imageUri image path
 * @returns `ImageForUpload` - an object with props requested by a `FormData`.
 */
const prepareImageForUpload = async (
  imageUri: string,
): Promise<ImageForUpload> => {
  const image = await manipulateAsync(prepareImageUri(imageUri), [], {
    compress: 0.5,
    format: SaveFormat.JPEG,
  });

  return {
    uri: image.uri,
    name: Date.now().toString(),
    type: 'image/jpeg',
  };
};

export const multimediaService = {
  prepareImageForUpload,
  prepareImageUri,
  getPhotos,
};
