export interface ImageForUpload {
  uri: string;
  name: string;
  type: 'image/png' | 'image/jpeg';
}

export interface PhotoListPaginated {
  photoList: string[];
  cursor?: string;
  hasNextPage: boolean;
}
