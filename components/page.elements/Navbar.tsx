import * as React from 'react';
import styled from 'styled-components';
import NavList from './NavList';
import { handleFlex } from '../styled/utils/flex';
import Link from 'next/link';

interface Props {
  className: string;
  navTitle: string;
}

const NavBar: React.FC<Props> = ({ className, navTitle }) => {
  return (
    <nav className={className}>
      <div className="title">
        <Link href="/">
          <a>{navTitle}</a>
        </Link>
      </div>
      <NavList />
    </nav>
  );
};

export default styled(NavBar)`
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  ${handleFlex('row', 'space-between', 'center')};
  .title {
    width: 40%;
    a {
      font-size: 3rem;
      width: 70%;
      display: block;
      border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    }
  }
`;
