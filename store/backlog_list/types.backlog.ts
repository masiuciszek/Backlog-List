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
  filteredBacklogs: Backlog[];
  current: null | Backlog;
  isLoading: boolean;
}

export enum ActionTypes {
  GET_BACKLOGS = 'GET_BACKLOGS',
  ADD_BACKLOG = 'ADD_BACKLOG',
  DELETE_BACKLOG = 'DELETE_BACKLOG',
  EDIT_BACKLOG = 'EDIT_BACKLOG',
  UPDATE_FAVORITE = 'UPDATE_FAVORITE',
  SET_CURRENT = 'SET_CURRENT',
  CLEAR_CURRENT = 'CLEAR_CURRENT',
  FILTER_BACKLOGS_BY_FAVORITE = 'FILTER_BACKLOGS_BY_FAVORITE',
  FILTER_BACKLOGS_BY_COMPLETED = 'FILTER_BACKLOGS_BY_COMPLETED',
  CLEAR_FILTERED = 'CLEAR_FILTERED',
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
export interface UpdateFavorite {
  type: ActionTypes.UPDATE_FAVORITE;
  payload: string; // ID
}
export interface FilterByFavorite {
  type: ActionTypes.FILTER_BACKLOGS_BY_FAVORITE;
}
export interface FilterByCompleted {
  type: ActionTypes.FILTER_BACKLOGS_BY_COMPLETED;
}
export interface ClearFilter {
  type: ActionTypes.CLEAR_FILTERED;
}

export type ActionTypesReducer =
  | AddBacklogAction
  | GetBacklogAction
  | DeleteBacklogAction
  | SetCurrentAction
  | ClearCurrentAction
  | UpdateFavorite
  | FilterByCompleted
  | FilterByFavorite
  | ClearFilter;
