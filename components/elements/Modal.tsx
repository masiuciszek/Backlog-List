import * as React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { handleFlex } from '../styled/utils/flex';
import { Btn } from '../styled/utils/Button';

interface Props {
  title: string;
  desc: string;
  on: boolean;
  onClose: () => void;
  btn1Text?: string;
  btn2Text?: string;
}

const ModalStyles = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryShadow};
  height: 100%;
  /* transform: translate(-50%, -50%); */
`;

const ModalBody = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.primary};
  height: 80%;
  ${handleFlex('column', 'center', 'center')};
  background: ${({ theme }) => theme.colors.white};
  width: 80vw;
  margin: 3rem auto;
  border-radius: 2rem;
  h1 {
    font-size: 3.5rem;
  }
  p {
    font-size: 1.8rem;
  }
`;

const BtnWrapper = styled.div`
  ${handleFlex('row', 'space-evenly', 'center')};
  width: 80%;
  margin: 2rem 0;
`;

const Modal: React.FC<Props> = ({
  title,
  desc,
  onClose,
  on,
  btn1Text,
  btn2Text,
}) => {
  const { x, opacity } = useSpring({
    x: on ? 0 : 100,
    opacity: on ? 1 : 0,
  });
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
        <BtnWrapper>
          <Btn>{btn1Text ? btn1Text : 'Confirm'}</Btn>
          <Btn onClick={onClose}>{btn2Text ? btn2Text : 'Close'}</Btn>
        </BtnWrapper>
      </ModalBody>
    </ModalStyles>
  );
};
export default Modal;
