import styled from 'styled-components';
import { handleFlex } from './flex';

export const FormStyle = styled.form``;

export const Label = styled.label`
  ${handleFlex('column', 'center', 'center')};
  margin: 2rem 0;
  width: 100%;
  padding: 2rem 1rem;
  span {
    display: block;
    margin-right: auto;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: capitalize;
  }
`;
export const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0.8rem 1rem;
  font-size: 1.6rem;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};
  transition: ${({ theme }) => theme.transition.quickTransition};
  &:focus {
    border-bottom: 3px solid ${({ theme: { colors } }) => colors.primary};
    ${({ theme }) => theme.shadow.elevations[1]};
  }
`;
