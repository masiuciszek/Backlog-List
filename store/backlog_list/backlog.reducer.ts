import { State, ActionTypes, ActionTypesReducer } from './types.backlog';

const initialState: State = {
  backlogs: [],
};
export default (state: State = initialState, action: ActionTypesReducer) => {
  switch (action.type) {
    case ActionTypes.GET_BACKLOGS:
      return {
        ...state,
        backlogs: action.payload,
      };
    case ActionTypes.ADD_BACKLOG:
      return {
        ...state,
        backlogs: [...state.backlogs, action.payload],
      };

    default:
      return state;
  }
};
