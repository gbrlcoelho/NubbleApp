import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {Button, Screen, Separator} from '@components';
import {useAuthSignOut} from '@domain';
import {AppScreenProps} from '@routes';

import {MenuItem, type MenuItemProps} from './components';

export const SettingsScreen = ({
  navigation,
}: AppScreenProps<'SettingsScreen'>) => {
  const {signOut, isLoading} = useAuthSignOut();

  const items: MenuItemProps[] = [
    {label: 'Termos de uso', onPress: () => {}},
    {label: 'Política de privacidade', onPress: () => {}},
    {
      label: 'Modo escuro',
      onPress: () => navigation.navigate('DarkModeScreen'),
    },
  ];

  const renderItem: ListRenderItem<MenuItemProps> = ({item}) => {
    return <MenuItem {...item} />;
  };

  return (
    <Screen canGoBack title="Configurações" flex={1}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.label}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={
          <Button
            title="Sair da conta"
            onPress={signOut}
            loading={isLoading}
            marginTop="s48"
          />
        }
        bounces={false}
      />
    </Screen>
  );
};
