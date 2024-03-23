import React from 'react';

import {Box, Text} from '@components';

import {OnboardingPageItem} from '../OnboardingPage/types';

export const Content = ({
  title,
  subtitle,
}: Omit<OnboardingPageItem, 'image'>) => {
  return (
    <Box>
      <Text preset="headingLarge">
        {title.map(({text, isHighlighted}) => (
          <Text
            key={text}
            preset="headingLarge"
            color={isHighlighted ? 'carrotSecondary' : 'backgroundContrast'}>
            {text}
          </Text>
        ))}
      </Text>
      <Text preset="paragraphLarge">{subtitle}</Text>
    </Box>
  );
};
