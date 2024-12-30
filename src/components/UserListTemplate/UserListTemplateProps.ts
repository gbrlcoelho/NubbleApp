import {FollowUser} from '@domain';
import {QueryKeys} from '@infra';
import {Page} from '@types';

export interface UserListTemplateProps {
  getUserList: (page: number) => Promise<Page<FollowUser>>;
  screenTitle: string;
  totalText: string;
  emptyMessage: string;
  queryKey: QueryKeys;
  button: {
    title: string;
    onPress: (followUser: FollowUser) => void;
  };
}
