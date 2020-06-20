import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import styled from 'styled-components';
import BacklogItem from './BacklogItem';

import BacklogFooter from './BacklogFooter';
import { selectBacklogs } from '../../store/backlog_list/Backlog.select';
import BacklogForm from './Backlog.form';
import useToggle from '../../src/hooks/useToggle';
import {
  deleteBacklog,
  setCurrent,
} from '../../store/backlog_list/backlog.actions';
import Modal from '../elements/Modal';
import { Backlog } from '../../store/backlog_list/types.backlog';

interface Props {}

const BacklogList: React.FC<Props> = () => {
  const backlogs = useSelector((state: AppState) => selectBacklogs(state));

  const [showModal, toggleModal] = useToggle(false);

  const dispatch = useDispatch();

  const handleDelete = (backlog: Backlog): void => {
    toggleModal();
    dispatch(setCurrent(backlog));
  };

  return (
    <StyledBacklog>
      <BacklogForm />
      <ListStyles>
        {backlogs.length > 0 ? (
          backlogs.map((item) => (
            <BacklogItem key={item._id} item={item} onDelete={handleDelete} />
          ))
        ) : (
          <h3>...Loading</h3>
        )}
      </ListStyles>

      <Modal
        title="Are you sure to delete your backlog?"
        desc="This can't be re done"
        onClose={toggleModal}
        on={showModal}
        isDeleteModal
      />

      <BacklogFooter />
    </StyledBacklog>
  );
};

const StyledBacklog = styled.div`
  width: 100%;
  margin: 3rem auto;
  max-width: 900px;
  ${({ theme }) => theme.shadow.elevations[4]}
  padding: 1rem 1.5rem;
`;

const ListStyles = styled.ul`
  width: 100%;
  margin: 6rem 0;
`;

export default BacklogList;
