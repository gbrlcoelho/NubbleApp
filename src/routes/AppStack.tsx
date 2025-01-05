import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useSaveNotificationToken} from '@domain';
import {AppTabBottomTabParamList, AppTabNavigator} from '@routes';
import {
  CameraScreen,
  DarkModeScreen,
  EditEmailScreen,
  EditPasswordScreen,
  EditProfileScreen,
  MyFollowersScreen,
  MyFollowingScreen,
  PostCommentScreen,
  ProfileScreen,
  PublishPostScreen,
  SearchScreen,
  SettingsScreen,
} from '@screens';
import {useNotificationAction, usePermission} from '@services';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  SettingsScreen: undefined;
  DarkModeScreen: undefined;
  SearchScreen: undefined;
  PostCommentScreen: {postId: number; postAuthorId: number; showPost?: boolean};
  ProfileScreen: {userId: number};
  PublishPostScreen: {imageUri: string};
  CameraScreen: undefined;
  EditProfileScreen: {userId: number};
  EditEmailScreen: {userId: number};
  EditPasswordScreen: {userId: number};
  MyFollowingScreen: undefined;
  MyFollowersScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

interface AppStackProps {
  initialRouteName?: keyof AppStackParamList;
}

export const AppStack = ({
  initialRouteName = 'AppTabNavigator',
}: AppStackProps) => {
  usePermission('notification');
  useSaveNotificationToken();
  useNotificationAction();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="DarkModeScreen" component={DarkModeScreen} />
      <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="PublishPostScreen" component={PublishPostScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="EditEmailScreen" component={EditEmailScreen} />
      <Stack.Screen name="EditPasswordScreen" component={EditPasswordScreen} />
      <Stack.Screen name="MyFollowingScreen" component={MyFollowingScreen} />
      <Stack.Screen name="MyFollowersScreen" component={MyFollowersScreen} />
    </Stack.Navigator>
  );
};
