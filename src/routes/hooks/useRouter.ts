import {useAuthCredentials, useShowOnboarding} from '@services';

import {Stacks} from './types';

export const useRouter = (): Stacks => {
  const showOnboarding = useShowOnboarding();
  const {authCredentials, isLoading} = useAuthCredentials();

  if (isLoading) {
    return 'Loading';
  }

  if (showOnboarding) {
    return 'Onboarding';
  }

  if (authCredentials) {
    return 'App';
  }

  return 'Auth';
};
