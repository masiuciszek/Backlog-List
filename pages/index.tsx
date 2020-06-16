import * as React from 'react';
import { NextPage } from 'next';
import { Page } from '../components/layout';
import Title from '../components/page.elements/Title';
import BacklogList from '../components/backlogList/Backlog.list';
interface Props {}

const HomePage: React.FC<NextPage> = () => {
  return (
    <>
      <Title main="Backlog List" />
      <Page>
        <BacklogList />
      </Page>
    </>
  );
};
export default HomePage;
