import { UserState } from '../user/state/user.reducer';

// Extended by lazy loaded modules
export interface State {
  user: UserState;
}
