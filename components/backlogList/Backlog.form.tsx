import * as React from 'react';
import styled from 'styled-components';
import { handleFlex } from '../styled/utils/flex';
interface Props {}

const StyledForm = styled.form`
  padding: 2rem 0.6rem;
  position: relative;
  height: 8rem;
`;

const InputStyles = styled.input`
  width: 80%;
  position: absolute;
  margin: 2rem auto 0 auto;
  display: block;
  border: none;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.6rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  outline: 0;
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const BacklogForm: React.FC<Props> = () => {
  const [text, setText] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(text);
    setText('');
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="text">
        <InputStyles
          name="text"
          placeholder="...new backlog"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          value={text}
        />
      </label>
    </StyledForm>
  );
};
export default BacklogForm;
