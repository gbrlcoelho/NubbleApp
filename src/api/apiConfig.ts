import {REACT_APP_BASE_URL} from '@env';
import axios from 'axios';

import {AuthCredentials, authService} from '@domain';

export const api = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (authCredentials: AuthCredentials) => void;
  removeCredentials: () => void;
};

export const registerInterceptor = ({
  authCredentials,
  saveCredentials,
  removeCredentials,
}: InterceptorProps) => {
  const interceptor = api.interceptors.response.use(
    response => response,
    async error => {
      const failedRequest = error.config;
      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefreshTokenRequest =
        authService.isRefreshTokenRequest(failedRequest);

      if (error.response.status === 401) {
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent) {
          removeCredentials();
          return Promise.reject(error);
        }

        failedRequest.sent = true;

        const newAuthCredentials = await authService.authenticateByRefreshToken(
          authCredentials?.refreshToken,
        );

        saveCredentials(newAuthCredentials);

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

        return api.request(failedRequest);
      }
      return Promise.reject(error);
    },
  );

  return () => api.interceptors.response.eject(interceptor);
};
