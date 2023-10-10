import {AuthCredentials} from '@domain';
import {storage} from '@services';

const AUTH_KEY = '@Auth';

async function set(authCredentials: AuthCredentials): Promise<void> {
  await storage.setItem(AUTH_KEY, authCredentials);
}
async function get(): Promise<AuthCredentials | null> {
  const authCredentials = await storage.getItem<AuthCredentials>(AUTH_KEY);
  return authCredentials;
}
async function remove(): Promise<void> {
  await storage.removeItem(AUTH_KEY);
}

export const authCredentialsStorage = {set, get, remove};
