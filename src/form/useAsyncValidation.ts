import {
  FieldValues,
  Path,
  UseFormGetFieldState,
  UseFormWatch,
} from 'react-hook-form';

import {useValidationQuery} from './useValidationQuery';

interface Props<FormSchema extends FieldValues> {
  fieldName: Path<FormSchema>;
  watch: UseFormWatch<FormSchema>;
  getFieldState: UseFormGetFieldState<FormSchema>;
  isAvailableFunc: (value: string) => Promise<boolean>;
  errorMessage?: string;
}

interface ReturnValues {
  errorMessage?: string;
  notReady: boolean;
  isFetching: boolean;
}

export const useAsyncValidation = <FormSchema extends FieldValues>({
  watch,
  getFieldState,
  fieldName,
  isAvailableFunc,
  errorMessage = 'indisponível',
}: Props<FormSchema>): ReturnValues => {
  const field = watch(fieldName);
  const fieldState = getFieldState(fieldName);
  const fieldIsValid = !fieldState.invalid && fieldState.isDirty;
  const query = useValidationQuery({
    value: field,
    enabled: fieldIsValid,
    isAvailableFunc,
    fieldName,
  });

  return {
    errorMessage: query.isUnavailable ? errorMessage : undefined,
    notReady: query.isFetching || query.isUnavailable,
    isFetching: query.isFetching,
  };
};
