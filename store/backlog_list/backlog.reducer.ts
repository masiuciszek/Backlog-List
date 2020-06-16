import { State, ActionTypes, ActionTypesReducer } from './types.backlog';

const initialState: State = {
  backlogs: [
    {
      text: 'Learn Rust',
      completed: false,
      important: false,
    },
    {
      text: 'Learn to test applications',
      completed: false,
      important: true,
    },
    {
      text: 'Learn C',
      completed: false,
      important: true,
    },
  ],
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
