import React from "react";
import styled from "styled-components";

const SearchTermsBarWrapper = styled.div`
  display: flex;
  padding: auto 1rem auto 1rem;
  height: 3em;
  align-items: center;
  &:first-child {
    padding-left: 1rem;
  }
  background-color: #e1e1e1;
`;

const SearchTerm = styled.div`
  font-size: 0.8em;
  text-transform: uppercase;
  margin-right: 1em;
  border: black solid 1px;
  border-radius: 3px;
  padding: 0.5em 1em 0.5em 1em;
`;

export function SearchTermsBar() {
  return (
    <SearchTermsBarWrapper>
      <SearchTerm>Pop</SearchTerm>
      <SearchTerm>Acoustic Guitar</SearchTerm>
    </SearchTermsBarWrapper>
  );
}
