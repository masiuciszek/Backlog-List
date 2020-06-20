import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { handleFlex } from '../styled/utils/flex';

interface Props {}

interface ListData {
  name: string;
  path: string;
}

const NavList: React.FC<Props> = () => {
  const [listData, setListData] = React.useState<ListData[]>([
    {
      name: 'about',
      path: '/about',
    },
    {
      name: 'faq',
      path: '/faq',
    },
  ]);
  return (
    <StyledList>
      {listData.map(({ name, path }) => (
        <li key={path}>
          <Link href={path}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  ${handleFlex('row', 'space-between', 'center')};
  li {
    padding: 0.6rem;
  }
  a {
    text-transform: capitalize;
  }
`;
export default NavList;
