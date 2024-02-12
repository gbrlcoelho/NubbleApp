import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';

const check = async (name: PermissionName): Promise<PermissionStatus> => {
  console.log(`Checking permission for ${name}`);
  return 'granted';
};

const request = async (name: PermissionName): Promise<PermissionStatus> => {
  console.log(`Requesting permission for ${name}`);
  return 'granted';
};

export const permissionService: PermissionService = {
  check,
  request,
};
