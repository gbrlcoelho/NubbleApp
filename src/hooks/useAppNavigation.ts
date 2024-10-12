import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AppStackParamList} from '@routes';
import {useAuthCredentials} from '@services';

export const useAppNavigation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const {authCredentials} = useAuthCredentials();

  const toProfile = (userId: number) => {
    if (authCredentials?.user.id === userId) {
      return navigation.navigate('AppTabNavigator', {
        screen: 'MyProfileScreen',
      });
    }

    navigation.push('ProfileScreen', {userId});
  };

  type Params = Omit<AppStackParamList['PostCommentScreen'], 'showPost'>;

  const toPostComment = (params: Params) => {
    navigation.push('PostCommentScreen', params);
  };

  const toPostDetails = (params: Params) => {
    navigation.push('PostCommentScreen', {
      ...params,
      showPost: true,
    });
  };

  const navigate = {
    toProfile,
    toPostComment,
    toPostDetails,
  };

  return {
    navigate,
  };
};
