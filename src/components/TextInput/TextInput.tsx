import {Box, Text} from '@components';
import {useAppTheme} from '@hooks';
import React, {useRef} from 'react';
import {Pressable, TextInput as RNTextInput} from 'react-native';
import {TextInputProps} from './TextInputProps';
import {
  $textInputStyle,
  handleTextInputContainerStyle,
} from './TextInputStyles';

export const TextInput = ({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) => {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" marginBottom="s4">
          {label}
        </Text>
        <Box {...handleTextInputContainerStyle(errorMessage)}>
          <RNTextInput
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
