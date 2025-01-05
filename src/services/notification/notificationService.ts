import messaging from '@react-native-firebase/messaging';

const getToken = async (): Promise<string> => {
  const token = await messaging().getToken();
  return token;
};

export const notificationService = {
  getToken,
};
