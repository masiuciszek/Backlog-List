import {
  AddAction,
  ActionTypes,
  GetBacklogAction,
  Backlog,
} from './types.backlog';
import { Dispatch } from 'react';

// export const getBacklogs = () => async (
//   dispatch: Dispatch<GetBacklogAction>,
// ) => {
//   try {
//     const res = await fetch('http://localhost:3000/api/backlogs');
//     const data: { success: boolean; data: Backlog[] } = await res.json();
//     const responseData = data.data;
//     dispatch({
//       type: ActionTypes.GET_BACKLOGS,
//       payload: responseData,
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

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
