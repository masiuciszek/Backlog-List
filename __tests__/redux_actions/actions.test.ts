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

const backlogs = [backlog];

jest.mock('../../store/backlog_list/backlog.actions');
jest.mock('../../store/backlog_list/types.backlog');

describe('actions', () => {
  test('getBacklogs should be defined ', () => {
    expect(actions.getBacklogs).toBeDefined();
    actions.getBacklogs(backlogs);
    expect(actions.getBacklogs).toBeCalled();
    expect(actions.getBacklogs).toBeCalledWith(backlogs);
    expect(actions.getBacklogs).toBeCalledTimes(1);
    expect(actions.getBacklogs).not.toBeCalledTimes(2);
  });
  test('clearfilter action', () => {
    actions.clearFilter();
    expect(actions.clearFilter).toBeCalled();
    expect(actions.clearFilter).toBeCalledTimes(1);
  });
  test('set current action', () => {
    actions.setCurrent(backlog);
    expect(actions.setCurrent).toBeCalled();
    expect(actions.setCurrent).toBeCalledTimes(1);
    expect(actions.setCurrent).toBeCalledWith(backlog);
  });

  test('Delete backlog action', () => {
    let fakeId = '2122@@12##12122';
    // expect(actions.deleteBacklog(fakeId)).toBeDefined();
    actions.deleteBacklog(fakeId);
    expect(actions.deleteBacklog).toBeCalledTimes(1);
    actions.deleteBacklog('212#211');
    expect(actions.deleteBacklog).toBeCalledTimes(2);
    expect(actions.deleteBacklog).toBeCalledWith(fakeId);
  });
});
