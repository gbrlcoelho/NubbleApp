import {useEffect, useState} from 'react';

/**
 * @description https://usehooks-ts.com/react-hook/use-debounce
 * @param value to be debounced
 * @param delay in milliseconds
 * @returns debounced value
 */

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};
