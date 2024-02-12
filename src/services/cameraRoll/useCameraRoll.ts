import {useEffect, useState} from 'react';

import {CameraRoll} from '@react-native-camera-roll/camera-roll';

export const useCameraRoll = () => {
  const [list, setList] = useState<string[]>([]);

  const getPhotos = async () => {
    const photoPage = await CameraRoll.getPhotos({first: 10});
    const uriList = photoPage.edges.map(edge => edge.node.image.uri);
    setList(uriList);

    return [];
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return {
    list,
  };
};
