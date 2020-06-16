import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import styled from 'styled-components';
import BacklogItem from './BacklogItem';
import { getBacklogs } from '../../store/backlog_list/backlog.actions';
import BacklogFooter from './BacklogFooter';
import { selectBacklogs } from '../../store/backlog_list/Backlog.select';
interface Props {}

const BacklogList: React.FC<Props> = () => {
  const backlogs = useSelector((state: AppState) => selectBacklogs(state));
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBacklogs());
  }, []);

  return (
    <StyledBacklog>
      <ListStyles>
        {backlogs.map((item) => (
          <BacklogItem key={item.text} item={item} />
        ))}
      </ListStyles>
      <BacklogFooter />
    </StyledBacklog>
  );
};

const StyledBacklog = styled.div`
  width: 100%;
  margin: 3rem auto;
  max-width: 900px;
  ${({ theme }) => theme.shadow.elevations[4]}
`;

const ListStyles = styled.ul`
  width: 100%;
  border: 2px solid red;
`;

export default BacklogList;
