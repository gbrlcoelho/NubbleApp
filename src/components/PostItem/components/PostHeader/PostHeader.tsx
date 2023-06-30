import React from 'react';
import {Image} from 'react-native';

import {Box, Text} from '@components';

import {PostHeaderProps} from './PostHeaderProps';

export const PostHeader = ({author}: PostHeaderProps) => {
  return (
    <Box flexDirection="row" alignItems="center" marginBottom="s16">
      <Image
        source={{uri: author.profileURL}}
        style={{width: 32, height: 32, borderRadius: 14}}
      />
      <Text marginLeft="s12" preset="paragraphMedium" semiBold>
        {author.userName}
      </Text>
    </Box>
  );
};
