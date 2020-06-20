import { createSelector } from 'reselect';
import { AppState } from '..';
import { State } from './types.backlog';

const backlogState = (state: AppState) => state.backlogs;

export const selectBacklogs = createSelector(
  [backlogState],
  (backlog: State) => backlog.backlogs,
);
export const selectCurrent = createSelector(
  [backlogState],
  (backlog: State) => backlog.current,
);
