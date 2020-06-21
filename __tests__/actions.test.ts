import * as actions from '../store/backlog_list/backlog.actions';
import * as types from '../store/backlog_list/types.backlog';

describe('actions', () => {
  test('getBacklogs should be defined ', () => {
    expect(actions.getBacklogs).toBeDefined();
  });
  test('clearfilter action', () => {
    expect(actions.clearFilter().type).toBe(types.ActionTypes.CLEAR_FILTERED);
  });
});
