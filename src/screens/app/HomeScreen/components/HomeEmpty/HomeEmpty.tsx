import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

import {HomeEmptyProps} from './HomeEmptyProps';

export const HomeEmpty = ({loading, error, refresh}: HomeEmptyProps) => {
  let component = (
    <Text bold preset="paragraphMedium">
      Não há publicações no seu feed 😥
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" marginBottom="s16">
          Não foi possível carregar o feed 😥
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
