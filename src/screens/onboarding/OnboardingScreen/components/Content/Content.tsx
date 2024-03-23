import React from 'react';

import {Box, ProgressIndicator, Text} from '@components';

import {OnboardingPageItem} from '../OnboardingPage/types';

export const Content = ({
  title,
  subtitle,
  total,
  index,
}: Omit<OnboardingPageItem, 'image'>) => {
  return (
    <Box gap="s16">
      <ProgressIndicator total={total} currentIndex={index} marginBottom="s8" />
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
      <Text color="paragraph" preset="paragraphLarge">
        {subtitle}
      </Text>
    </Box>
  );
};
