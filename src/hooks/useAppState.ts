import {useEffect, useState} from 'react';
import {AppState, AppStateStatus} from 'react-native';

export const useAppState = () => {
  const [appState, setAppState] = useState<AppStateStatus>(
    AppState.currentState,
  );

  useEffect(() => {
    const eventSubscription = AppState.addEventListener('change', state =>
      setAppState(state),
    );

    return eventSubscription.remove;
  }, []);

  return appState;
};
