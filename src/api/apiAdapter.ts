import {MetaDataPage} from '@types';

import {MetaDataPageAPI, PageAPI} from './apiTypes';

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

const toPageModel = <APIType, ModelType>(
  page: PageAPI<APIType>,
  adapterToModel: (api: APIType) => ModelType,
) => {
  return {
    data: page.data.map(adapterToModel),
    meta: toMetaDataPage(page.meta),
  };
};

export const apiAdapter = {toMetaDataPage, toPageModel};
