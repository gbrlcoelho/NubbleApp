import {User} from '@domain';

export interface EditProfileFormProps {
  user?: User;
  onChangeIsValid: (isValid: boolean) => void;
}

export interface EditProfileFormRef {
  onSubmit: () => void;
}
