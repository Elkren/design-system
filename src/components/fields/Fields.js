import React from "react";
import styled from "styled-components";

export const FieldWrapper = styled.div`
  display: grid;
  color: ${(props) => props.theme.fields.textColor};
  &&:hover > input {
    border: 2px solid ${(props) => props.theme.fields.borderColor};
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  cursor: pointer;
  padding: 4px;
  margin-left: -4px;
  font-family: ${(props) => props.theme.primaryFont};
`;

export const StyledInput = styled.input`
  height: 40px;
  width: 300px;
  border: none;
  border: 2px solid ${(props) => props.theme.fields.defaultBorderColor};
  border-bottom: 2px solid ${(props) => props.theme.fields.borderColor};
  background-color: ${(props) => props.theme.fields.inputBackgroundColor};
  padding-left: 10px;
  font-size: ${(props) => props.theme.fields.typeSize};
  color: ${(props) => props.theme.fields.inputTextColor};

  &&:focus,
  :active {
    border: 2px solid ${(props) => props.theme.fields.borderColor};
    outline: none;
  }
`;

export const TextField = ({ id, labelText, onInputChange }) => {
  return (
    <FieldWrapper>
      <StyledLabel for={id}>{labelText}</StyledLabel>
      <StyledInput type="text" id={id} name={id} onChange={onInputChange} />
    </FieldWrapper>
  );
};
