import { createSelector } from 'reselect';
import { AppState } from '..';
import { State } from './types.backlog';

const backlogState = (state: AppState) => state.backlogs;

export const selectBacklogs = createSelector(
  [backlogState],
  (backlog: State) => backlog.backlogs,
);

export const selectFilteredBacklogs = createSelector(
  [backlogState],
  (backlog: State) => backlog.filteredBacklogs,
);

export const selectCurrent = createSelector(
  [backlogState],
  (backlog: State) => backlog.current,
);
export const selectIsLoading = createSelector(
  [backlogState],
  (backlog: State) => backlog.isLoading,
);
