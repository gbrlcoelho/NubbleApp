import {FlatListProps} from 'react-native';

import {QueryKeys, usePaginatedList} from '@infra';

import {EmptyListProps} from './components/EmptyListProps';

export type ItemTConstraints = {id: number | string};

export interface InfinityScrollListProps<ItemT extends ItemTConstraints> {
  renderItem: FlatListProps<ItemT>['renderItem'];
  flatListProps: Partial<Omit<FlatListProps<ItemT>, 'renderItem'>>;
  emptyListProps: Pick<EmptyListProps, 'emptyMessage' | 'errorMessage'>;
  queryKey: QueryKeys;
  getList: Parameters<typeof usePaginatedList<ItemT>>[1];
}
