import {Permission, PermissionsAndroid, Platform} from 'react-native';

import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';

const mapNameToPermission = (name: PermissionName): Permission | null => {
  switch (name) {
    case 'photoLibrary':
      if (Number(Platform.Version) >= 33) {
        return 'android.permission.READ_MEDIA_IMAGES';
      } else {
        return 'android.permission.READ_EXTERNAL_STORAGE';
      }
    case 'camera':
      return 'android.permission.CAMERA';

    case 'notification':
      return 'android.permission.POST_NOTIFICATIONS';

    default:
      return null;
  }
};

const check = async (name: PermissionName): Promise<PermissionStatus> => {
  const permission = mapNameToPermission(name);

  if (permission) {
    const result = await PermissionsAndroid.check(permission);
    return result ? 'granted' : 'denied';
  }

  return 'unavailable';
};

const request = async (name: PermissionName): Promise<PermissionStatus> => {
  const permission = mapNameToPermission(name);

  if (permission) {
    const result = await PermissionsAndroid.request(permission);
    return result;
  }

  return 'unavailable';
};

export const permissionService: PermissionService = {
  check,
  request,
};
