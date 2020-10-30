import React from "react";
import styled from "styled-components";

const PlusIconWrapper = styled.svg`
  width: 25px;
  height: 25px;
  margin-top: 2px; 
`;

export const PlusIcon = () => (
  <PlusIconWrapper viewBox="15 15 70 70">
    <polygon points="73 47 53 47 53 27 47 27 47 47 27 47 27 53 47 53 47 73 53 73 53 53 73 53 73 47"/>
  </PlusIconWrapper>
);
