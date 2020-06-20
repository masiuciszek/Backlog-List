export interface Backlog {
  _id: string;
  text: string;
  completed: boolean;
  desc: string;
  important: boolean;
  liked: boolean;
  createdAt: string;
}

export interface BacklogAddData {
  text: string;
  completed: boolean;
  desc: string;
  liked: boolean;
  important: boolean;
}

export interface State {
  backlogs: Backlog[];
  current: null | Backlog;
  isLoading: boolean;
}

export enum ActionTypes {
  GET_BACKLOGS = 'GET_BACKLOGS',
  ADD_BACKLOG = 'ADD_BACKLOG',
  DELETE_BACKLOG = 'DELETE_BACKLOG',
  EDIT_BACKLOG = 'EDIT_BACKLOG',
  SET_CURRENT = 'SET_CURRENT',
  CLEAR_CURRENT = 'CLEAR_CURRENT',
}

export interface AddBacklogAction {
  type: ActionTypes.ADD_BACKLOG;
  payload: BacklogAddData;
}

export interface GetBacklogAction {
  type: ActionTypes.GET_BACKLOGS;
  payload: Backlog[];
}
export interface DeleteBacklogAction {
  type: ActionTypes.DELETE_BACKLOG;
  payload: string; // ID
}
export interface SetCurrentAction {
  type: ActionTypes.SET_CURRENT;
  payload: Backlog;
}
export interface ClearCurrentAction {
  type: ActionTypes.CLEAR_CURRENT;
}

export type ActionTypesReducer =
  | AddBacklogAction
  | GetBacklogAction
  | DeleteBacklogAction
  | SetCurrentAction
  | ClearCurrentAction;
