import {Box, Button, Icon, Text, TextInput} from '@components/index';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import React from 'react';
import {SafeAreaView} from 'react-native';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal="s24">
          <Text preset="headingLarge" marginBottom="s8">
            Olá!
          </Text>
          <Text preset="paragraphLarge" marginBottom="s40">
            Digite seu e-mail e senha para entrar
          </Text>
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{marginBottom: 's20'}}
            errorMessage="E-mail inválido"
          />
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            secureTextEntry
            RightComponent={<Icon name="eyeOn" color="gray2" />}
            boxProps={{marginBottom: 's10'}}
          />
          <Text preset="paragraphSmall" bold color="primary">
            Esqueci minha senha
          </Text>
          <Button title="Entrar" marginTop="s48" />

          <Button preset="outline" title="Criar conta" marginTop="s12" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
};
