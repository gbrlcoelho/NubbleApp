export interface EmptyListProps {
  emptyMessage?: string;
  errorMessage?: string;
  loading: boolean;
  error: unknown;
  refresh: () => void;
}
