import {
  PERMISSIONS as RNP_PERMISSIONS,
  Permission as RnpPermission,
  PermissionStatus as RnpPermissionStatus,
  check as rnpCheck,
  request as rnpRequest,
} from 'react-native-permissions';

import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';

const mapName: Record<PermissionName, RnpPermission> = {
  photoLibrary: RNP_PERMISSIONS.IOS.PHOTO_LIBRARY,
  camera: RNP_PERMISSIONS.IOS.CAMERA,
};

const mapStatus: Record<RnpPermissionStatus, PermissionStatus> = {
  blocked: 'never_ask_again',
  denied: 'denied',
  granted: 'granted',
  limited: 'granted',
  unavailable: 'unavailable',
};

const check = async (name: PermissionName): Promise<PermissionStatus> => {
  const status = await rnpCheck(mapName[name]);

  return mapStatus[status];
};

const request = async (name: PermissionName): Promise<PermissionStatus> => {
  const status = await rnpRequest(mapName[name]);

  return mapStatus[status];
};

export const permissionService: PermissionService = {
  check,
  request,
};
