import axios from 'axios';

type ErrorWithMessage = {message: string};

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
};

const toErrorWithMessage = (maybeError: unknown): ErrorWithMessage => {
  if (isErrorWithMessage(maybeError)) {
    return maybeError;
  }

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
};

const tryGetAxiosErrorMessage = (error: unknown): string | null => {
  try {
    if (axios.isAxiosError(error)) {
      const response = error.response;

      const message = response?.data?.message;
      if (message) {
        return message;
      }

      const errors = response?.data?.errors;
      if (Array.isArray(errors)) {
        return errors
          .map(
            (errorObj: {message?: string}) =>
              errorObj.message ?? 'unknown error',
          )
          .join(', ');
      }
    }
    return null;
  } catch (err) {
    return null;
  }
};

const getErrorMessage = (error: unknown) => {
  const axiosMessage = tryGetAxiosErrorMessage(error);
  if (axiosMessage) {
    return axiosMessage;
  }
  return toErrorWithMessage(error).message;
};

export const errorUtils = {
  getErrorMessage,
};
