import React, {useCallback, useRef, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {Box} from '@components';
import {OnboardingScreenProps} from '@routes';

import {
  OnboardingPage,
  OnboardingPageItem,
  onboardingPages,
} from './components';

export const OnboardingScreen =
  ({}: OnboardingScreenProps<'OnboardingScreen'>) => {
    const [pageIndex, setPageIndex] = useState(0);

    const flatlistRef = useRef<FlatList<OnboardingPageItem>>(null);

    const onFinishOnboarding = useCallback(() => {
      // TODO: Implement onFinishOnboarding
    }, []);

    const onPressNext = useCallback(() => {
      const isLastPage = pageIndex === onboardingPages.length - 1;

      if (isLastPage) {
        return onFinishOnboarding();
      }

      const nextPageIndex = pageIndex + 1;
      flatlistRef.current?.scrollToIndex({
        index: nextPageIndex,
        animated: true,
      });
      setPageIndex(nextPageIndex);
    }, [pageIndex, onFinishOnboarding]);

    const renderItem: ListRenderItem<OnboardingPageItem> = useCallback(
      ({item}) => {
        return (
          <OnboardingPage
            page={item}
            onPressNext={onPressNext}
            onPressSkip={onFinishOnboarding}
          />
        );
      },
      [onPressNext, onFinishOnboarding],
    );

    return (
      <Box flex={1} backgroundColor="background">
        <FlatList
          ref={flatlistRef}
          data={onboardingPages}
          renderItem={renderItem}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
        />
      </Box>
    );
  };
