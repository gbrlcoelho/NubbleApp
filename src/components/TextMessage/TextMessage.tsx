import React, {useRef} from 'react';
import {Pressable, TextInput as RNTextInput} from 'react-native';

import {$textInputStyle, Box, Text} from '@components';
import {useAppTheme} from '@hooks';

import {TextMessageProps} from './TextMessageProps';

export const TextMessage = ({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextMessageProps) => {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const sendIsDisabled = value?.trim().length === 0;

  return (
    <Pressable onPressIn={focusInput}>
      <Box
        backgroundColor="gray5"
        paddingHorizontal="s16"
        paddingVertical="s14"
        borderRadius="s12"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row">
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, {color: colors.gray1}]}
          {...rnTextInputProps}
        />
        <Pressable
          disabled={sendIsDisabled}
          onPress={() => onPressSend(value || '')}>
          <Text color={sendIsDisabled ? 'gray2' : 'greenPrimary'} bold>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
};
