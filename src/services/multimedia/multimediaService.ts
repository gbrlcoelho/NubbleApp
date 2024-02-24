import {CameraRoll} from '@react-native-camera-roll/camera-roll';

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

const prepareImageForUpload = (imageUri: string): ImageForUpload => {
  // TODO: Implement this function
  return {
    uri: imageUri,
    name: 'name',
    type: 'image/png',
  };
};

export const multimediaService = {
  prepareImageForUpload,
  getPhotos,
};
