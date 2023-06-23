import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {AppTabBar} from '@routes';
import {
  FavoritesScreen,
  HomeScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoritesScreen: undefined;
  MyProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

const renderTabBar = (props: BottomTabBarProps) => <AppTabBar {...props} />;

export const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
};
