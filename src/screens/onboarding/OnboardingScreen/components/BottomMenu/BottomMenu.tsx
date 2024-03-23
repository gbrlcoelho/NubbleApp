import React from 'react';

import {Box, Icon, PressableBox, Text} from '@components';

import {BottomMenuProps} from './types';

export const BottomMenu = ({
  onPressNext,
  onPressSkip,
  isLast,
}: BottomMenuProps) => {
  const nextText = isLast ? 'Começar' : 'Próximo';

  return (
    <Box flexDirection="row" justifyContent="space-between">
      <PressableBox onPress={onPressSkip} hitSlop={10}>
        <Text semiBold color="gray2">
          Pular
        </Text>
      </PressableBox>
      <PressableBox
        hitSlop={10}
        flexDirection="row"
        alignItems="center"
        onPress={onPressNext}>
        <Text bold marginRight="s4">
          {nextText}
        </Text>
        <Icon name="arrowRight" color="carrotSecondary" />
      </PressableBox>
    </Box>
  );
};
