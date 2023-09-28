import {create} from 'zustand';

import {AuthCredentialsService} from './authCredentialType';

export const useAuthCredentials = (): AuthCredentialsService => {
  return useAuthCredentialsZustand();
};

const useAuthCredentialsZustand = create<AuthCredentialsService>(set => ({
  authCredentials: null,
  isLoading: false,
  saveCredentials: async authCredentials => set({authCredentials}),
  removeCredentials: async () => set({authCredentials: null}),
}));
