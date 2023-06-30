import React from 'react';

import {SimpleLogo} from '@brand';

import {Box, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export const HomeHeader = () => {
  const {top} = useAppSafeArea();

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      paddingHorizontal="s24"
      paddingBottom="s24"
      style={{paddingTop: top}}>
      <SimpleLogo width={70} />
      <Box flexDirection="row" gap="s24">
        <Icon name="search" />
        <Icon name="bell" />
        <Icon name="chat" />
      </Box>
    </Box>
  );
};
