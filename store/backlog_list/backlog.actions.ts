import {
  AddBacklogAction,
  ActionTypes,
  GetBacklogAction,
  Backlog,
  BacklogAddData,
  DeleteBacklogAction,
  SetCurrentAction,
  ClearCurrentAction,
  UpdateFavorite,
} from './types.backlog';
import { Dispatch } from 'react';

export const getBacklogs = (backlogs: Backlog[]): GetBacklogAction => {
  return {
    type: ActionTypes.GET_BACKLOGS,
    payload: backlogs,
  };
};

interface ResponseDataBacklog {
  success: true;
  data: BacklogAddData;
}

export const addBacklog = (newBacklog: BacklogAddData) => async (
  dispatch: Dispatch<AddBacklogAction>,
) => {
  try {
    const response = await fetch('http://localhost:3000/api/backlogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBacklog),
    });
    const resData: ResponseDataBacklog = await response.json();
    const data = await resData.data;
    dispatch({
      type: ActionTypes.ADD_BACKLOG,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteBacklog = (backlogId: string) => async (
  dispatch: Dispatch<DeleteBacklogAction>,
) => {
  try {
    await fetch(`http://localhost:3000/api/backlogs/${backlogId}`, {
      method: 'DELETE',
    });
    dispatch({
      type: ActionTypes.DELETE_BACKLOG,
      payload: backlogId,
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateFavorite = (id: string, data: { liked: boolean }) => async (
  dispatch: Dispatch<UpdateFavorite>,
) => {
  try {
    await fetch(`http://localhost:3000/api/backlogs/favourite/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    dispatch({
      type: ActionTypes.UPDATE_FAVORITE,
      payload: id,
    });
  } catch (err) {
    console.error(err);
  }
};

export const setCurrent = (backlog: Backlog): SetCurrentAction => {
  return {
    type: ActionTypes.SET_CURRENT,
    payload: backlog,
  };
};
export const clearCurrent = (): ClearCurrentAction => {
  return {
    type: ActionTypes.CLEAR_CURRENT,
  };
};
