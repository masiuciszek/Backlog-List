import { combineReducers } from 'redux';

import * as Redux from 'redux';
import backlogReducer from './backlog_list/backlog.reducer';

export default Redux.combineReducers({
  backlogs: backlogReducer,
});
