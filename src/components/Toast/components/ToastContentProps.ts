import {Toast} from '@services';

export interface ToastContentProps {
  toast: Toast;
  hideToast: () => void;
}
