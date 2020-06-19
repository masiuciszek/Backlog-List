import { State, ActionTypes, ActionTypesReducer } from './types.backlog';

const initialState: State = {
  backlogs: [],
  isLoading: true,
};
export default (state: State = initialState, action: ActionTypesReducer) => {
  switch (action.type) {
    case ActionTypes.GET_BACKLOGS:
      return {
        ...state,
        backlogs: action.payload,
        isLoading: false,
      };
    case ActionTypes.ADD_BACKLOG:
      return {
        ...state,
        backlogs: [...state.backlogs, action.payload],
        isLoading: false,
      };

    default:
      return state;
  }
};
