import * as React from 'react';
import styled from 'styled-components';
import { handleFlex } from '../styled/utils/flex';
interface Props {}

const BacklogFooter: React.FC<Props> = () => {
  return (
    <BacklogFooterStyles>
      <Title>
        <h3>Backlog manager</h3>
      </Title>
      <FilterOptions>
        <label htmlFor="all">
          <span>All</span>

          <input type="checkbox" />
        </label>
        <label htmlFor="completed">
          <span>Completed</span>
          <input type="checkbox" />
        </label>
        <label htmlFor="important">
          <span>Important</span>
          <input type="checkbox" />
        </label>
      </FilterOptions>
    </BacklogFooterStyles>
  );
};

const BacklogFooterStyles = styled.footer`
  padding: 1rem 2rem;
  ${handleFlex('row', 'space-between', 'center')};
`;

const Title = styled.div`
  flex: 1;
  flex-basis: 50%;
  border: 3px solid blue;
`;

const FilterOptions = styled.div`
  ${handleFlex('row', 'space-between', 'center')};
  border: 3px solid red;
  flex: 2;
`;

export default BacklogFooter;
