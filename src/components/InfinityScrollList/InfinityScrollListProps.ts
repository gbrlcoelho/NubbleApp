import {FlatListProps} from 'react-native';

import {usePaginatedList} from '@infra';

import {EmptyListProps} from './components/EmptyListProps';

export type ItemTConstraints = {id: number | string};

export interface InfinityScrollListProps<ItemT extends ItemTConstraints> {
  renderItem: FlatListProps<ItemT>['renderItem'];
  flatListProps?: Partial<Omit<FlatListProps<ItemT>, 'renderItem'>>;
  emptyListProps?: Pick<EmptyListProps, 'emptyMessage' | 'errorMessage'>;
  queryKey: Parameters<typeof usePaginatedList<ItemT>>[0];
  getList: Parameters<typeof usePaginatedList<ItemT>>[1];
}
