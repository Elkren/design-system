import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { typeScale } from "../utils";
import { Illustrations, CloseIcon } from "../assets";
import { PrimaryButton } from "./Buttons";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const ModalIllustrationWrapper = styled.div`
  padding: 20px 20px 20px 20px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.illustrationBackgroundColor};
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 30px;
  top: 30px;
  width: 32px;
  height: 32px;

  &:active,
  &:focus {
    outline: none;
  }
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.slow,
  });
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <ModalIllustrationWrapper>
          <img
            src={Illustrations.SignUp}
            alt="Sign up for an account"
            aria-hidden="true"
          />
        </ModalIllustrationWrapper>
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>Sign up today to get access</SignUpText>
        <PrimaryButton>Sign up!</PrimaryButton>
        <CloseModalButton
          onClick={() => setShowModal(!showModal)}
          aria-label="Close modal"
        >
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
