import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

import {EmptyListProps} from './EmptyListProps';

export const EmptyList = ({
  emptyMessage = 'Não há publicações no seu feed 😥',
  errorMessage = 'Não foi possível carregar o feed 😥',
  loading,
  error,
  refresh,
}: EmptyListProps) => {
  let component = (
    <Text bold preset="paragraphMedium">
      {emptyMessage}
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" marginBottom="s16">
          {errorMessage}
        </Text>
        <Button title="Recarregar" preset="outline" onPress={refresh} />
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
};
