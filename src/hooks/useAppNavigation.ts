import {useNavigation} from '@react-navigation/native';

import {AppStackParamList} from '@routes';
import {useAuthCredentials} from '@services';

export const useAppNavigation = () => {
  const navigation = useNavigation();
  const {authCredentials} = useAuthCredentials();

  const toProfile = (userId: number) => {
    if (authCredentials?.user.id === userId) {
      return navigation.navigate('AppTabNavigator', {
        screen: 'MyProfileScreen',
      });
    }

    navigation.navigate('ProfileScreen', {userId});
  };

  type Params = Omit<AppStackParamList['PostCommentScreen'], 'showPost'>;

  const toPostComment = (params: Params) => {
    navigation.navigate('PostCommentScreen', params);
  };

  const toPostDetails = (params: Params) => {
    navigation.navigate('PostCommentScreen', {
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
