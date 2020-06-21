import * as React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { handleFlex } from '../styled/utils/flex';
import { Btn } from '../styled/utils/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteBacklog,
  clearCurrent,
} from '../../store/backlog_list/backlog.actions';
import { AppState } from '../../store';
import { selectCurrent } from '../../store/backlog_list/Backlog.select';
import Form from './Form';

interface Props {
  title: string;
  desc: string;
  on: boolean;
  onClose: () => void;
  btn1Text?: string;
  btn2Text?: string;
  isDeleteModal?: boolean;
  isEditModal?: boolean;
}

const Modal: React.FC<Props> = ({
  title,
  desc,
  onClose,
  on,
  btn1Text,
  btn2Text,
  isDeleteModal,
  isEditModal,
}) => {
  const dispatch = useDispatch();
  const currentBacklog = useSelector((state: AppState) => selectCurrent(state));

  const { x, opacity } = useSpring({
    x: on ? 0 : 100,
    opacity: on ? 1 : 0,
  });

  const handleDelete = () => {
    dispatch(deleteBacklog(currentBacklog ? currentBacklog._id : ''));
    dispatch(clearCurrent());
  };

  return (
    <ModalStyles
      style={{
        transform: x.interpolate((x) => `translate3d(0,${x * 1}%,0)`),
        opacity,
      }}
    >
      <ModalBody>
        <h1>{title}</h1>
        <p>{desc}</p>
        {isEditModal && <Form className="Edit-form" ctaText={btn1Text} />}
        <BtnWrapper>
          {isDeleteModal && (
            <Btn onClick={handleDelete}>{btn1Text ? btn1Text : 'Confirm'}</Btn>
          )}
          <Btn onClick={onClose}>{btn2Text ? btn2Text : 'Close'}</Btn>
        </BtnWrapper>
        <span id="close" onClick={onClose}>
          ⤫
        </span>
      </ModalBody>
    </ModalStyles>
  );
};

const ModalStyles = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryShadow};
  height: 100%;
  /* transform: translate(-50%, -50%); */
  z-index: 6;
`;

const ModalBody = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.primary};
  height: 80%;
  ${handleFlex('column', 'center', 'center')};
  background: ${({ theme }) => theme.colors.white};
  width: 80vw;
  margin: 3rem auto;
  border-radius: 2rem;
  position: relative;

  h1 {
    font-size: 3.5rem;
  }
  p {
    font-size: 1.8rem;
  }
  #close {
    position: absolute;
    top: -2rem;
    right: 1rem;
    cursor: pointer;
    font-size: 4rem;
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

const BtnWrapper = styled.div`
  ${handleFlex('row', 'space-evenly', 'center')};
  width: 80%;
  margin: 2rem 0;
`;

export default Modal;
