import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@routes';

export const useResetNavigationSuccess = () => {
  const navigation = useNavigation();

  const reset = (params: RootStackParamList['SuccessScreen']) => {
    navigation.reset({
      index: 1,
      routes: [
        {name: 'LoginScreen'},
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  };

  return {reset};
};
