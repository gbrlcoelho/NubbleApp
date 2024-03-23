import React from 'react';
import {Dimensions} from 'react-native';

import {Box} from '@components';

import {BottomMenu} from '../BottomMenu';
import {Content} from '../Content';
import {ImageHeader} from '../ImageHeader';

import {OnboardingPageProps} from './types';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const OnboardingPage = ({
  page,
  onPressNext,
  onPressSkip,
}: OnboardingPageProps) => {
  return (
    <Box flex={1} width={SCREEN_WIDTH} backgroundColor="background">
      <Box flex={4}>
        <ImageHeader image={page.image} />
      </Box>
      <Box flex={5} paddingHorizontal="s24">
        <Content {...page} />
      </Box>
      <Box flex={1} paddingHorizontal="s24">
        <BottomMenu
          onPressNext={onPressNext}
          onPressSkip={onPressSkip}
          isLast={page.isLast}
        />
      </Box>
    </Box>
  );
};
