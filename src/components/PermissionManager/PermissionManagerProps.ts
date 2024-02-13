import {ReactNode} from 'react';

import {PermissionName} from '@services';

export interface PermissionManagerProps {
  description: string;
  permissionName: PermissionName;
  children: ReactNode;
}
