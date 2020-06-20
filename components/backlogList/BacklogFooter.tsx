import * as React from 'react';
import styled from 'styled-components';
import { handleFlex } from '../styled/utils/flex';
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

  React.useEffect(() => {
    if (all) {
      setCheckedData({ all: true, completed: false, liked: false });
    }
    if (liked) {
      setCheckedData({ all: false, completed: false, liked: true });
    }
    if (completed) {
      setCheckedData({ all: false, completed: true, liked: false });
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
    position: absolute;
    opacity: 0;
  }
  input[type='checkbox'] + label {
    display: block;
    position: relative;
    padding-left: 2rem;
  }
  input[type='checkbox'] + label:before {
    content: '';
    position: absolute;
    top: 4px;
    left: -4px;
    width: 22px;
    height: 22px;
    background: none;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }
  input[type='checkbox']:checked + label:before {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export default BacklogFooter;

// label {
//   display: flex;
//   align-items: center;
//   z-index: 1;
//   span {
//     font-size: 1.7rem;
//   }
//   input[type='checkbox'] {
//     /* visibility: hidden; */
//   }
// }
// .filled,
// .unfilled {
//   width: 2rem;
//   height: 2rem;
//   border: 2px solid ${({ theme }) => theme.colors.primary};
//   border-radius: 50%;
//   margin: 0.5rem;
//   cursor: pointer;
// }
// .unfilled {
//   background: ${({ theme }) => theme.colors.primary};
// }
// .filled {
//   background: ${({ theme }) => theme.colors.white};
// }
