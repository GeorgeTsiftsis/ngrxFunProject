import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as AppState from '../../state/app.state'
import { User } from "../user";
import { MaskUserAction} from "./user.actions";

export interface State extends AppState.State {
  users: UserState
}

export interface UserState {
  maskUserName: boolean;
  currentUser: User
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null
}

// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);


export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(MaskUserAction, (state): UserState => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    }
  }),
);
