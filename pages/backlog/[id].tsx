import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { GetServerSideProps } from 'next';
import { Backlog } from '../../store/backlog_list/types.backlog';
import styled from 'styled-components';
import { Page } from '../../components/layout';
import { format } from 'date-fns';
import { handleFlex } from '../../components/styled/utils/flex';
import { Btn } from '../../components/styled/utils/Button';
import useToggle from '../../src/hooks/useToggle';
import Modal from '../../components/elements/Modal';
import { useDispatch } from 'react-redux';
import { setCurrent } from '../../store/backlog_list/backlog.actions';

interface Props {
  backlogItem: Backlog;
}

const BacklogItem: NextPage<Props> = ({ backlogItem }) => {
  const router = useRouter();
  let date = backlogItem?.createdAt.slice(0, 10).split('-');
  let y;
  let m;
  let d;
  if (date) {
    const [year, month, day] = date;
    y = year;
    m = month;
    d = day;
  }

  const [showModal, toggleModal] = useToggle(false);
  const dispatch = useDispatch();

  const handleEdit = (): void => {
    toggleModal();
    // let backlog: Backlog = {
    //   _id: backlogItem?._id,
    //   text: backlogItem?.text,
    //   important: backlogItem?.important,
    //   completed: backlogItem?.completed,
    //   liked: backlogItem?.liked,
    //   createdAt: backlogItem?.createdAt,
    //   desc: backlogItem?.desc,
    // };
    dispatch(setCurrent(backlogItem));
  };

  return (
    <Page>
      <StyledBacklogItem>
        <Header>
          <h3 style={{ color: backlogItem?.important ? '#C30F0E' : '#031326' }}>
            {backlogItem?.text}
          </h3>
        </Header>
        <Body>
          <p>
            Created At:{' '}
            {format(new Date(Number(y), Number(m), Number(d)), 'yyyy-MM-dd')}
          </p>
          <p>Desc: {backlogItem?.desc}</p>

          <Btn onClick={handleEdit}>Edit</Btn>
        </Body>
      </StyledBacklogItem>
      <Modal
        title={`Edit Backlog "${backlogItem?.text}" `}
        desc="Edit your backlog"
        on={showModal}
        onClose={toggleModal}
        isEditModal
      />
    </Page>
  );
};

const StyledBacklogItem = styled.section`
  ${({ theme }) => theme.shadow.elevations[1]};
  width: 80%;
  margin: 12rem auto 2rem auto;
`;

const Header = styled.div`
  text-align: center;
  text-transform: capitalize;
  padding: 1rem 2rem;
  h3 {
    font-size: 4rem;
  }
`;

const Body = styled.div`
  padding: 1rem 2rem;
  ${handleFlex('column', 'center', 'center')};
  p {
    font-size: 2rem;
    padding: 1rem;
  }
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const res = await fetch(`http://localhost:3000/api/backlogs/${id}`);
  const data: { success: boolean; data: Backlog } = await res.json();
  const backlogItem: Backlog = data?.data;

  return {
    props: {
      backlogItem,
    },
  };
};

export default BacklogItem;
