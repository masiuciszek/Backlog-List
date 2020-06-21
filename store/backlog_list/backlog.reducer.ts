import { State, ActionTypes, ActionTypesReducer } from './types.backlog';
import Backlog from '../../lib/models/Backlog';

const initialState: State = {
  backlogs: [],
  filteredBacklogs: [],
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
    case ActionTypes.EDIT_BACKLOG:
      return {
        ...state,
        backlogs: state.backlogs.map((item) =>
          item.text === action.payload.text
            ? { ...item, text: action.payload.text, desc: action.payload.desc }
            : item,
        ),
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

    case ActionTypes.UPDATE_FAVORITE:
      return {
        ...state,
        backlogs: state.backlogs.map((b) =>
          b._id === action.payload ? { ...b, liked: !b.liked } : b,
        ),
        isLoading: false,
      };
    case ActionTypes.UPDATE_COMPLETED:
      return {
        ...state,
        backlogs: state.backlogs.map((b) =>
          b._id === action.payload ? { ...b, completed: !b.completed } : b,
        ),
        isLoading: false,
      };

    case ActionTypes.FILTER_BACKLOGS_BY_FAVORITE:
      return {
        ...state,
        filteredBacklogs: state.backlogs.filter((backlog) => backlog.liked),
      };

    case ActionTypes.FILTER_BACKLOGS_BY_COMPLETED:
      return {
        ...state,
        filteredBacklogs: state.backlogs.filter((backlog) => backlog.completed),
      };
    case ActionTypes.CLEAR_FILTERED:
      return {
        ...state,
        filteredBacklogs: [],
      };
    default:
      return state;
  }
};
