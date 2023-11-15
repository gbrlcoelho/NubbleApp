import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {renderHook} from 'test-utils';

import {useAppSafeArea} from '@hooks';
import {theme} from '@theme';

const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  it('should return the minimum requirement', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 5, bottom: 5} as EdgeInsets),
    );
    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(theme.spacing.s20);
    expect(result.current.bottom).toEqual(theme.spacing.s20);
  });

  it('should return the safe area', () => {
    mockedUseSafeAreaInsets.mockImplementation(
      () => ({top: 40, bottom: 40} as EdgeInsets),
    );
    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(40);
    expect(result.current.bottom).toEqual(40);
  });
});
