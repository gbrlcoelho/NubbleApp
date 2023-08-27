import React, {createContext, useState} from 'react';

import {Toast, ToastService} from '@services';

export const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
});

export const ToastProvider = ({children}: React.PropsWithChildren<{}>) => {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: Toast) {
    setToast(_toast);
  }

  function hideToast() {
    setToast(null);
  }

  return (
    <ToastContext.Provider value={{toast, showToast, hideToast}}>
      {children}
    </ToastContext.Provider>
  );
};
