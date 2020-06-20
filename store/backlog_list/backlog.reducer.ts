import { State, ActionTypes, ActionTypesReducer } from './types.backlog';

const initialState: State = {
  backlogs: [],
  current: null,
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

    case ActionTypes.DELETE_BACKLOG:
      return {
        ...state,
        backlogs: state.backlogs.filter((item) => item._id !== action.payload),
        isLoading: false,
      };

    case ActionTypes.SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case ActionTypes.CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    default:
      return state;
  }
};
