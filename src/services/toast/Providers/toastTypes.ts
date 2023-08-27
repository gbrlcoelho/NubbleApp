export type ToastPosition = 'top' | 'bottom';
export type ToastType = 'success' | 'error';

export interface Toast {
  message: string;
  type?: ToastType;
  duration?: number;
  position?: ToastPosition;
  action?: {
    title: string;
    onPress: () => void;
  };
}

export interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hideToast: () => void;
}
