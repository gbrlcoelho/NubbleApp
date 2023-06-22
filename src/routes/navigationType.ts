import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList, AuthStackParamList} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;
