import {useContext} from 'react';

import {ToastService} from '@services';

import {ToastContext} from './Providers/ToastProvider';

export const useToastContext = (): ToastService => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('Toast must be used within a ToastProvider');
  }
  return context;
};
