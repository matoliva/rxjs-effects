import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import { loadUsers, loadUsersSuccess, loadUsersError } from "../actions";

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}
export const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usersReducer = createReducer(
  usersInitialState,
  on(loadUsers, (state) => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: [...users],
    loaded: true,
    loading: false,
  })),
  on(loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function usersReducer(state, action) {
  return _usersReducer(state, action);
}
