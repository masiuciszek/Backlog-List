import * as React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { Page } from '../components/layout';
import Title from '../components/page.elements/Title';
import BacklogList from '../components/backlogList/Backlog.list';
import { useDispatch } from 'react-redux';
import { getBacklogs } from '../store/backlog_list/backlog.actions';

export interface Backlog {
  id: string;
  text: string;
  completed: boolean;
  desc: string;
  important: boolean;
  liked: boolean;
  createdAt: string;
}

interface Props {
  backlogs: Backlog[];
}

const HomePage: NextPage<Props> = ({ backlogs }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBacklogs(backlogs));
  }, []);
  return (
    <>
      <Title main="Backlog List" center />
      <Page>
        <BacklogList />
      </Page>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/backlogs');
  const data: { success: boolean; data: Backlog[] } = await res.json();
  const resData: Backlog[] = data.data;

  return {
    props: {
      backlogs: resData,
    },
  };
};

export default HomePage;
