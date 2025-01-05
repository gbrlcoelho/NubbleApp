import messaging from '@react-native-firebase/messaging';

import {NotificationToNavigate} from './notificationTypes';

const getToken = async (): Promise<string> => {
  const token = await messaging().getToken();
  return token;
};

const getActionFromNotificationData = (data: {
  [key: string]: string | object;
}): NotificationToNavigate | null => {
  if (typeof data.navigate === 'string') {
    const navigateProps = JSON.parse(data.navigate);
    if (typeof navigateProps.screen === 'string') {
      const screen = navigateProps.screen;
      const params = navigateProps.params;

      return {screen, params};
    }
  }

  return null;
};

const getInitialNotification =
  async (): Promise<NotificationToNavigate | null> => {
    const remoteMessage = await messaging().getInitialNotification();

    if (remoteMessage?.data) {
      return getActionFromNotificationData(remoteMessage.data);
    }

    return null;
  };

const onNotificationOpenedApp = (
  listener: (action: NotificationToNavigate | null) => void,
) => {
  const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
    if (remoteMessage.data) {
      const action = getActionFromNotificationData(remoteMessage.data);
      listener(action);
    }
  });

  return unsubscribe;
};

export const notificationService = {
  getToken,
  getInitialNotification,
  onNotificationOpenedApp,
};
