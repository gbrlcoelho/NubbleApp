import React, {useRef} from 'react';
import {Pressable, TextInput as RNTextInput} from 'react-native';

import {Box, Text} from '@components';
import {useAppTheme} from '@hooks';

import {TextInputProps} from './TextInputProps';
import {
  $textInputStyle,
  handleTextInputContainerStyle,
} from './TextInputStyles';

export const TextInput = ({
  label,
  errorMessage,
  RightComponent,
  LeftComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) => {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Box flexGrow={1} flexShrink={1} {...boxProps}>
      <Pressable onPress={focusInput}>
        {label && (
          <Text preset="paragraphMedium" marginBottom="s4">
            {label}
          </Text>
        )}
        <Box {...handleTextInputContainerStyle(errorMessage)}>
          {LeftComponent ? (
            <Box marginRight="s16" justifyContent="center">
              {LeftComponent}
            </Box>
          ) : null}
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
          {RightComponent ? (
            <Box marginLeft="s16" justifyContent="center">
              {RightComponent}
            </Box>
          ) : null}
        </Box>
        {errorMessage ? (
          <Text preset="paragraphSmall" bold color="error" marginTop="s4">
            {errorMessage}
          </Text>
        ) : null}
      </Pressable>
    </Box>
  );
};
