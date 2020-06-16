export interface Backlog {
  id: string;
  text: string;
  completed: boolean;
  important: boolean;
}

export interface State {
  backlogs: Backlog[];
}

export enum ActionTypes {
  GET_BACKLOGS = 'GET_BACKLOGS',
  ADD_BACKLOG = 'ADD_BACKLOG',
  DELETE_BACKLOG = 'DELETE_BACKLOG',
  EDIT_BACKLOG = 'EDIT_BACKLOG',
  SET_CURRENT = 'SET_CURRENT',
  CLEAR_CURRENT = 'CLEAR_CURRENT',
}

export interface AddAction {
  type: ActionTypes.ADD_BACKLOG;
  payload: Backlog;
}
export interface GetBacklogAction {
  type: ActionTypes.GET_BACKLOGS;
  payload: Backlog[];
}

export type ActionTypesReducer = AddAction | GetBacklogAction;
