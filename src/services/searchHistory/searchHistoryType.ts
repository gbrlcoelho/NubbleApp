import {User} from '@domain';

export interface SearchHistoryService {
  userList: User[];
  addUser: (user: User) => void;
  removeUser: (userId: User['id']) => void;
  clearUserList: () => void;
}
