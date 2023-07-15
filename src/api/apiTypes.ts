export interface MetaDataPageAPI {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  previous_page_url: string | null;
}

/**
 * @description Interface that represents the response of a paginated API
 * @template T The type of the data that the API returns
 */
export interface PageAPI<T> {
  meta: MetaDataPageAPI;
  data: T[];
}
