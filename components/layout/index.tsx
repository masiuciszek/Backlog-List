import * as React from 'react';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { handleFlex } from '../styled/utils/flex';
import Navbar from '../page.elements/Navbar';

interface Props {
  children: React.ReactNode;
}

const theme: DefaultTheme = {
  appSize: '10px',
  shadow: {
    elevations: [
      'box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)',
      'box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)',
      'box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)',
      'box-shadow: 3px 2px rgba(42, 43, 49,.3)',
      'box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)',
    ],
  },
  colors: {
    primary: '#031326',
    primaryShadow: 'rgba(3, 19, 38,.6)',
    secondary: '#a3b3c6',
    secondaryShadow: 'rgba(47, 68, 92,.6)',
    black: '#030506',
    white: '#fff',
    offWhite: '#F1EFEE',
  },
  brakePoints: {
    small: 400,
    medium: 960,
    large: 1140,
  },
  size: {
    h1: '50px',
    h2: '40px',
    h3: '30px',
    h4: '27px',
    h5: '22px',
    p: '18px',
    a: '16px',
    maxWidth: '1100px',
  },
  transition: {
    mainTransition: 'all .3s linear',
    secondaryTransition: 'all 0.3s ease-in-out',
    quickTransition: 'all 200ms ease-in-out',
  },
};

export const Page = styled.section`
  max-width: ${({ theme }) => theme.size.maxWidth};
  height: 100%;
  margin: 0 auto;
  ${handleFlex('column', 'center', 'center')};
`;

const Main = styled.main`
  flex-grow: 1 auto;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar className="nav" navTitle="Backlog Manager" />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
