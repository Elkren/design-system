import React from "react";
import styled from "styled-components";

const PlayIconWrapper = styled.svg`
  width: 45px;
  height: 45px;
  * {
    fill: none;
    stroke: #4a4b53;
    stroke-miterlimit: 10;
    vector-effect: non-scaling-stroke;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
`;

export const PlayIcon = () => (
  <PlayIconWrapper viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polygon points="17.3545059 11.9999433 8 17.9096393 8 6.09024721"></polygon>
  </PlayIconWrapper>
);
