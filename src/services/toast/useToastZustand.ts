import {create} from 'zustand';

import {ToastService} from './Providers/toastTypes';

const useToastStore = create<ToastService>(set => ({
  toast: null,
  showToast: toast => set({toast}),
  hideToast: () => set({toast: null}),
}));

export const useToastZustand = (): ToastService['toast'] => {
  return useToastStore(state => state.toast);
};

export const useToastServiceZustand = (): Pick<
  ToastService,
  'showToast' | 'hideToast'
> => {
  const showToast = useToastStore(state => state.showToast);
  const hideToast = useToastStore(state => state.hideToast);
  return {showToast, hideToast};
};
