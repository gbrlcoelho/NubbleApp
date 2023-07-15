import {MetaDataPage} from '@types';

import {MetaDataPageAPI} from './apiTypes';

const toMetaDataPage = (metaDataPageAPI: MetaDataPageAPI): MetaDataPage => {
  return {
    total: metaDataPageAPI.total,
    perPage: metaDataPageAPI.per_page,
    currentPage: metaDataPageAPI.current_page,
    lastPage: metaDataPageAPI.last_page,
    firstPage: metaDataPageAPI.first_page,
    hasNextPage: !!metaDataPageAPI.next_page_url,
    hasPreviousPage: !!metaDataPageAPI.previous_page_url,
  };
};

export const apiAdapter = {toMetaDataPage};
