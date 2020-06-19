import styled from 'styled-components';

export const Btn = styled.button`
  padding: 0.6rem 0.9rem;
  font-size: 1.7rem;
  ${({ theme: { shadow } }) => shadow.elevations[2]};
  margin: 2rem 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transition.quickTransition};
  cursor: pointer;
  width: 10em;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
    width: 9.2em;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
