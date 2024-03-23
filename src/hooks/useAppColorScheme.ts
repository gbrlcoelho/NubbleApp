import {useEffect} from 'react';
import {Appearance} from 'react-native';

import {useSettingsService} from '@services';

/**
 * Hook to listen to system color scheme changes (dark mode and light mode)
 */
export const useAppColorScheme = () => {
  const {onSystemChange} = useSettingsService();

  useEffect(() => {
    onSystemChange(Appearance.getColorScheme());
  }, [onSystemChange]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) =>
      onSystemChange(colorScheme),
    );

    return () => subscription.remove();
  }, [onSystemChange]);
};
