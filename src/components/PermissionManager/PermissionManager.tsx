import React from 'react';
import {Linking, Platform} from 'react-native';

import {
  ActivityIndicator,
  Box,
  Button,
  Screen,
  Text,
  TextProps,
} from '@components';
import {usePermission} from '@services';

import {PermissionManagerProps} from './PermissionManagerProps';

export const PermissionManager = ({
  description,
  permissionName,
  children,
}: PermissionManagerProps) => {
  const {status, isLoading} = usePermission(permissionName);

  if (status === 'granted') {
    return <>{children}</>;
  }

  return (
    <Screen flex={1} canGoBack>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text preset="headingSmall" textAlign="center">
          {description}
        </Text>
        {isLoading && <ActivityIndicator color="primary" />}
        {status === 'unavailable' && (
          <Text {...$messageStyle}>
            Esse recurso não está disponível para este dispositivo.
          </Text>
        )}
        {status === 'never_ask_again' && (
          <Box>
            {Platform.OS === 'android' && (
              <Text {...$messageStyle}>
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
      </Box>
    </Screen>
  );
};

const $messageStyle: TextProps = {
  preset: 'paragraphMedium',
  color: 'error',
  bold: true,
  marginVertical: 's16',
  textAlign: 'center',
};
