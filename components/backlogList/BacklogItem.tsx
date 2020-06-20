import * as React from 'react';
import { Backlog } from '../../store/backlog_list/types.backlog';
import styled from 'styled-components';
import { handleFlex } from '../styled/utils/flex';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import {
  updateFavorite,
  updateCompleted,
} from '../../store/backlog_list/backlog.actions';

interface Props {
  item: Backlog;
  onDelete: (backlog: Backlog) => void;
}

const BacklogItem: React.FC<Props> = ({ item, onDelete }) => {
  const { _id, text, completed, important, createdAt, desc, liked } = item;
  let date = createdAt.slice(0, 10).split('-');
  const [year, month, day] = date;
  const dispatch = useDispatch();

  return (
    <StyledItem>
      <Complete
        completed={completed}
        onClick={() => {
          dispatch(updateCompleted(_id, { completed: !completed }));
        }}
      >
        <div className="circle" />
      </Complete>
      <Wrapper>
        <p>
          {text} <span id="edit">✎</span>
          <br />
          {format(
            new Date(Number(year), Number(month), Number(day)),
            'yyyy-MM-dd',
          )}
          <span id="deleteIcon" onClick={() => onDelete(item)}>
            ⤬
          </span>
        </p>

        <p>{desc}</p>
      </Wrapper>
      <Star
        onClick={() => {
          dispatch(updateFavorite(_id, { liked: !liked }));
        }}
      >
        <img src={liked ? '/filled.png' : '/unfilled.png'} alt="star" />
      </Star>
    </StyledItem>
  );
};

const StyledItem = styled.li`
  padding: 1rem 1.5rem;
  border: 3px solid ${({ theme }) => theme.colors.black};
  width: 100%;
  display: flex;
  align-items:center;
  /* ${handleFlex('row', 'space-between', 'center')}; */
  border-radius: 1rem;
  ${({ theme }) => theme.shadow.elevations[1]};
  margin: 1.3rem 0;
  position: relative;

`;

const Wrapper = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  p {
    font-size: 2rem;

    &:nth-child(1) {
      text-transform: capitalize;
      width: 35%;
    }
    &:nth-child(2) {
      padding: 1rem;
      margin: 0 auto;
      text-align: center;
      color: ${({ theme }) => theme.colors.secondary};
      width: 79%;
      font-size: 1.6rem;
    }
  }
  #deleteIcon {
    font-size: 3rem;
    top: 0.5rem;
    left: 1rem;
    position: relative;
    cursor: pointer;
  }
  #edit {
    cursor: pointer;
    font-size: 2rem;
    margin-left: 1rem;
  }
`;

interface CompleteProps {
  completed: boolean;
}

const Complete = styled.div<CompleteProps>`
  padding: 1rem 4rem 1rem 0.5rem;
  .circle {
    border: 2px solid
      ${({ theme, completed }) =>
        completed ? theme.colors.black : theme.colors.primary};
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    cursor: pointer;
    background: ${({ theme, completed }) =>
      completed ? theme.colors.primary : theme.colors.white};
  }
`;

const Star = styled.div`
  margin-left: auto;
  cursor: pointer;
  img {
    width: 3rem;
  }
`;

export default BacklogItem;
