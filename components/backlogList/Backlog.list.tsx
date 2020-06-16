import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import styled from 'styled-components';
import BacklogItem from './BacklogItem';
import { getBacklogs } from '../../store/backlog_list/backlog.actions';

interface Props {}

const BacklogList: React.FC<Props> = () => {
  const selectBacklogs = useSelector(
    (state: AppState) => state.backlogs.backlogs,
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBacklogs());
  }, []);
  console.log(selectBacklogs);
  return (
    <StyledBacklog>
      {/* <ListStyles>
        {selectBacklogs.map((item) => (
          <BacklogItem key={item.text} item={item} />
        ))}
      </ListStyles> */}
    </StyledBacklog>
  );
};

const StyledBacklog = styled.div`
  width: 100%;
  margin: 3rem auto;
  max-width: 900px;
`;

const ListStyles = styled.ul`
  width: 100%;
  border: 2px solid red;
`;
export default BacklogList;
