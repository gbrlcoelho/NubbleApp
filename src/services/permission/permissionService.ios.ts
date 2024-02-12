import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';

const check = async (name: PermissionName): Promise<PermissionStatus> => {
  console.log('Checking permission on iOS', name);
  return 'unavailable';
};

const request = async (name: PermissionName): Promise<PermissionStatus> => {
  console.log('Requesting permission on iOS', name);
  return 'unavailable';
};

export const permissionService: PermissionService = {
  check,
  request,
};
