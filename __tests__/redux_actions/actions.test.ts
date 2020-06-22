import * as actions from '../../store/backlog_list/backlog.actions';
import * as types from '../../store/backlog_list/types.backlog';

interface Backlog {
  _id: string;
  text: string;
  completed: boolean;
  desc: string;
  important: boolean;
  liked: boolean;
  createdAt: string;
}
const backlog: Backlog = {
  _id: 'sadas',
  text: 'hello',
  completed: true,
  desc: 'hello',
  important: false,
  liked: true,
  createdAt: '2020',
};

describe('actions', () => {
  test('getBacklogs should be defined ', () => {
    expect(actions.getBacklogs).toBeDefined();
  });
  test('clearfilter action', () => {
    expect(actions.clearFilter().type).toBe(types.ActionTypes.CLEAR_FILTERED);
  });
  test('set current action', () => {
    expect(actions.setCurrent(backlog).type).toBe(
      types.ActionTypes.SET_CURRENT,
    );
    expect(actions.setCurrent(backlog).payload).toBe(backlog);
  });
});
