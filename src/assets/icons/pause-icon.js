import React from "react";
import styled from "styled-components";

const PauseIconWrapper = styled.svg`
  width: 45px;
  height: 45px;
  margin-left: -2px;
  * {
    fill: none;
    stroke: #4a4b53;
    stroke-miterlimit: 10;
    vector-effect: non-scaling-stroke;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
`;

export const PauseIcon = () => (
  <PauseIconWrapper viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <line x1="8.5" y1="18" x2="8.5" y2="6"></line>
    <line x1="15.5" y1="18" x2="15.5" y2="6"></line>
  </PauseIconWrapper>
);
