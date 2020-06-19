import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import styled from 'styled-components';
import BacklogItem from './BacklogItem';

import BacklogFooter from './BacklogFooter';
import { selectBacklogs } from '../../store/backlog_list/Backlog.select';
import BacklogForm from './Backlog.form';

interface Props {}

const BacklogList: React.FC<Props> = () => {
  const backlogs = useSelector((state: AppState) => selectBacklogs(state));

  return (
    <StyledBacklog>
      <BacklogForm />
      <ListStyles>
        {backlogs.length > 0 ? (
          backlogs.map((item) => <BacklogItem key={item.text} item={item} />)
        ) : (
          <h3>...Loading</h3>
        )}
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
  padding: 1rem 1.5rem;
`;

const ListStyles = styled.ul`
  width: 100%;
  margin: 6rem 0;
`;

export default BacklogList;
