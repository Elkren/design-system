import React from "react";
import styled from "styled-components";

const NextIconWrapper = styled.svg`
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

export const NextIcon = () => (
  <NextIconWrapper viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polygon points="14.3545059 11.9999433 5 17.9096393 5 6.09024721"></polygon>
    <line x1="17.9615385" y1="6" x2="17.9615385" y2="18"></line>
  </NextIconWrapper>
);
