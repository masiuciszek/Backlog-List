import {
  AddAction,
  ActionTypes,
  GetBacklogAction,
  Backlog,
} from './types.backlog';

export const getBacklogs = (backlogs: Backlog[]): GetBacklogAction => {
  return {
    type: ActionTypes.GET_BACKLOGS,
    payload: backlogs,
  };
};

export const addBacklog = (newBacklog: Backlog): AddAction => {
  return {
    type: ActionTypes.ADD_BACKLOG,
    payload: newBacklog,
  };
};
