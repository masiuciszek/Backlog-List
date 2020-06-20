import * as React from 'react';
import styled from 'styled-components';
import { handleFlex } from '../styled/utils/flex';
import { useDispatch } from 'react-redux';
import { Backlog } from '../../pages';
import { BacklogAddData } from '../../store/backlog_list/types.backlog';
import { addBacklog } from '../../store/backlog_list/backlog.actions';
import { Btn } from '../styled/utils/Button';
interface Props {}

const StyledForm = styled.form`
  padding: 3rem 0.6rem;
  position: relative;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputStyles = styled.input`
  /* width: 80%; */
  /* position: absolute; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  width: 30vw;
  margin: 2rem auto;
  display: block;
  border: none;
  transition: ${({ theme }) => theme.transition.secondaryTransition};
  font-size: 1.6rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  outline: 0;
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    &::placeholder {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  &::placeholder {
    text-transform: capitalize;
  }
`;

interface FormData {
  text: string;
  desc: string;
}

const BacklogForm: React.FC<Props> = () => {
  const [formData, setFormData] = React.useState<FormData>({
    text: '',
    desc: '',
  });

  const { text, desc } = formData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, value },
    } = event;
    setFormData({ ...formData, [name]: value });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBacklog: BacklogAddData = {
      text,
      completed: false,
      desc,
      liked: false,
      important: false,
    };
    dispatch(addBacklog(newBacklog));
    setFormData({
      text: '',
      desc: '',
    });
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="text">
        <InputStyles
          name="text"
          placeholder="text"
          onChange={handleChange}
          value={text}
        />
      </label>
      <label htmlFor="desc">
        <InputStyles
          name="desc"
          placeholder="description"
          onChange={handleChange}
          value={desc}
        />
      </label>
      {text.length > 5 && desc.length > 10 && (
        <Btn type="submit">New Backlog</Btn>
      )}
    </StyledForm>
  );
};
export default BacklogForm;
