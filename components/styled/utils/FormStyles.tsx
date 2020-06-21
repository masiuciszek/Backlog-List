import styled from 'styled-components';
import { handleFlex } from './flex';

export const FormStyle = styled.form``;

export const Label = styled.label`
  ${handleFlex('column', 'center', 'center')};
  margin: 2rem 0;
  width: 100%;
  padding: 2rem 1rem;
  span,
  .errorMsg {
    display: block;
    margin-right: auto;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: capitalize;
  }
  .errorMsg {
    color: #d6100f;
  }
`;

interface FormDataError<T> {
  textError: T;
  descError: T;
}
interface InputProps {
  isError: FormDataError<string>;
}
export const Input = styled.input<InputProps>`
  width: 100%;
  border: ${({ isError }) =>
    isError.descError || isError.textError ? `2px solid #d6100f` : 0};
  outline: 0;
  padding: 0.8rem 0;
  font-size: 1.6rem;
  border-bottom: 2px solid
    ${({ isError, theme: { colors } }) =>
      isError.descError || isError.textError ? '#d6100f' : colors.primary};
  transition: ${({ theme }) => theme.transition.quickTransition};
  &:focus {
    border-bottom: 3px solid ${({ theme: { colors } }) => colors.primary};
    ${({ theme }) => theme.shadow.elevations[1]};
  }
`;
