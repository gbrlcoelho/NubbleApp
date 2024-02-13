import React from 'react';
import {Linking, Platform} from 'react-native';

import {ActivityIndicator, Box, Button, Screen, Text} from '@components';
import {usePermission} from '@services';

import {PermissionManagerProps} from './PermissionManagerProps';

export const PermissionManager = ({
  description,
  permissionName,
  children,
}: PermissionManagerProps) => {
  const {status, isLoading} = usePermission(permissionName);

  if (status === 'granted') {
    return children;
  }

  return (
    <Screen flex={1} justifyContent="center" alignItems="center">
      <Text preset="headingSmall" textAlign="center">
        {description}
      </Text>
      {isLoading && <ActivityIndicator color="primary" />}
      {status === 'never_ask_again' && (
        <Box>
          {Platform.OS === 'android' && (
            <Text
              preset="paragraphMedium"
              textAlign="center"
              bold
              color="error"
              marginVertical="s16">
              É necessário abrir e fechar o App novamente após alterar as
              configurações de permissão.
            </Text>
          )}
          <Button
            title="Abrir Configurações"
            onPress={Linking.openSettings}
            marginTop="s16"
          />
        </Box>
      )}
    </Screen>
  );
};
