import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 32px;
  height: 32px;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <path
      d="M26,8L24,6l-8,8L8,6,6,8l8,8L6,24l2,2,8-8,8,8,2-2-8-8Z"
      fill="#737581"
    />
  </CloseIconWrapper>
);
