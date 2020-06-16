import * as React from 'react';
import { Backlog } from '../../store/backlog_list/types.backlog';
import styled from 'styled-components';
interface Props {
  item: Backlog;
}

const BacklogItem: React.FC<Props> = ({ item }) => {
  return (
    <StyledItem>
      <h4>{item.text}</h4>
    </StyledItem>
  );
};

const StyledItem = styled.li`
  padding: 1rem 0.6rem;
  border: 3px solid #3232;
  width: 100%;
`;
export default BacklogItem;
