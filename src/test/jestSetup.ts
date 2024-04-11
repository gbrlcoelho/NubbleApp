//@ts-ignore
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

import {initializeStorage} from '../services/storage';
import {inMemoryStorage} from '../services/storage/implementation/jest/inMemoryStorage';

jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}));

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock('@react-native-camera-roll/camera-roll', () => ({
  CameralRoll: {
    getPhotos: jest.fn(async () => ({
      edges: [
        {node: {image: {uri: 'photo1'}}},
        {node: {image: {uri: 'photo2'}}},
        {node: {image: {uri: 'photo3'}}},
      ],
    })),
  },
}));

jest.mock('../services/permission/permissionService', () => ({
  permissionService: {
    check: jest.fn(),
    request: jest.fn(),
  },
}));

jest.mock('expo-image-manipulator', () => ({
  manipulateAsync: jest.fn(),
}));

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn().mockImplementation(() => Promise.resolve()),
    isVisible: jest.fn().mockResolvedValue(false),
    useHideAnimation: jest.fn().mockReturnValue({
      container: {},
      logo: {source: 0},
      brand: {source: 0},
    }),
  };
});

initializeStorage(inMemoryStorage);
