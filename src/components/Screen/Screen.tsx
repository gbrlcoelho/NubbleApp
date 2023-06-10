import {Box, Icon, Text} from '@components/index';
import {useAppSafeArea, useAppTheme} from '@hooks';
import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {ScreenProps} from './ScreenProps';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

export const Screen = ({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) => {
  const {colors} = useAppTheme();
  const {top, bottom} = useAppSafeArea();
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView behavior={behavior} style={{flex: 1}}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoBack ? (
            <Box flexDirection="row" marginBottom="s24" alignItems="center">
              <Icon name="arrowLeftIcon" color="primary" />
              <Text preset="paragraphMedium" semiBold marginLeft="s8">
                Voltar
              </Text>
            </Box>
          ) : null}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
};
