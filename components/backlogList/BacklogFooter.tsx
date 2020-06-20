import * as React from 'react';
import styled from 'styled-components';
import { handleFlex } from '../styled/utils/flex';
import { useDispatch } from 'react-redux';
import {
  filterByFavorite,
  clearFilter,
  filterByCompleted,
} from '../../store/backlog_list/backlog.actions';
interface Props {}

const BacklogFooter: React.FC<Props> = () => {
  const [checkedData, setCheckedData] = React.useState({
    all: true,
    completed: false,
    liked: false,
  });
  const { all, completed, liked } = checkedData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedData({ ...checkedData, [e.target.name]: e.target.checked });
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (all) {
      setCheckedData({ all: true, completed: false, liked: false });
      dispatch(clearFilter());
    }
    if (liked) {
      setCheckedData({ all: false, completed: false, liked: true });
      dispatch(filterByFavorite());
    }
    if (completed) {
      setCheckedData({ all: false, completed: true, liked: false });
      dispatch(filterByCompleted());
    }
  }, [completed, liked, all]);

  return (
    <BacklogFooterStyles>
      <Title>
        <h3>Backlog manager</h3>
      </Title>
      <FilterOptions>
        <legend>Options</legend>
        <input
          type="checkbox"
          checked={all}
          name="all"
          onChange={handleChange}
          id="all"
        />
        <label htmlFor="all">all</label>
        <input
          type="checkbox"
          checked={completed}
          name="completed"
          onChange={handleChange}
          id="completed"
        />
        <label htmlFor="completed">completed</label>
        <input
          type="checkbox"
          checked={liked}
          name="liked"
          onChange={handleChange}
          id="liked"
        />
        <label htmlFor="liked">liked</label>
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
  flex-basis: 30%;
  text-transform: capitalize;
  h3 {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    width: 70%;
  }
`;

const FilterOptions = styled.fieldset`
  ${({ theme }) => theme.shadow.elevations[2]};
  ${handleFlex('row', 'space-between', 'center')};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  width: 50%;
  flex: 2;
  padding: 0.5rem 1rem;

  input[type='checkbox'] {
    opacity: 0;
  }
  label {
    position: relative;
  }

  label::before {
    content: '';
    background: url('/checked.svg');
    overflow: none;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 22px;
    height: 32px;
    position: absolute;
    left: -39px;
    top: -1px;

    transform: scale(0) rotateZ(180deg);
    transition: all 0.4s cubic-bezier(0.54, 0.01, 0, 1.49);
  }

  input[type='checkbox']:checked + label::before {
    transform: scale(1) rotateZ(0deg);
  }

  label::after {
    content: '';
    border: 2px solid ${({ theme }) => theme.colors.primary};
    width: 29px;
    height: 29px;
    position: absolute;
    left: -42px;
    top: 1px;
    border-radius: 50%;
  }
`;

export default BacklogFooter;
