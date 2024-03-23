import React from 'react';

import {Box} from '@components';

import {ProgressIndicatorProps} from './types';

export const ProgressIndicator = ({
  currentIndex,
  total,
  ...boxProps
}: ProgressIndicatorProps) => {
  return (
    <Box flexDirection="row" alignItems="center" gap="s12" {...boxProps}>
      {Array.from({length: total}, (_, index) => {
        return (
          <Box
            key={index}
            width={index === currentIndex ? 14 : 8}
            height={index === currentIndex ? 14 : 8}
            borderRadius="s12"
            backgroundColor={
              index === currentIndex ? 'carrotSecondary' : 'gray2'
            }
          />
        );
      })}
    </Box>
  );
};
