export interface PhotoListPaginated {
  photoList: string[];
  cursor?: string;
  hasNextPage: boolean;
}
