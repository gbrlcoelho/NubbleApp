import React from 'react';

import {ProfileTemplate} from '@components';
import {AppTabScreenProps} from '@routes';
import {useAuthCredentials} from '@services';

export const MyProfileScreen = ({}: AppTabScreenProps<'MyProfileScreen'>) => {
  const {userId} = useAuthCredentials();

  if (!userId) {
    return null;
  }

  return <ProfileTemplate userId={userId} isMyProfile />;
};
