import React from "react";
import styled from "styled-components";

const PreviousIconWrapper = styled.svg`
  width: 25px;
  height: 25px;
  * {
    fill: none;
    stroke: #4a4b53;
    stroke-miterlimit: 10;
    vector-effect: non-scaling-stroke;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
`;

export const PreviousIcon = () => (
  <PreviousIconWrapper viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polygon points="9.1070326 12.0000567 18.4615385 6.09036066 18.4615385 17.9097528"></polygon>
    <line x1="5.5" y1="18" x2="5.5" y2="6"></line>
  </PreviousIconWrapper>
);
