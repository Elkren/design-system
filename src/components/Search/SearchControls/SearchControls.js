import React from "react";
import styled from "styled-components";

const SearchControlsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  border-bottom: #e1e1e1 solid 2px;
`;
const SearchBarWrapper = styled.div`
  min-width: 16.66%;
`;

const SearchBar = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 1rem;

  border: none;
  border-right: #e1e1e1 solid 2px;
`;

const Facet = styled.button`
  min-width: 16.66%;
  border: none;
  border-right: #e1e1e1 solid 2px;
  background-color: white;
`;

export function SearchControls() {
  return (
    <SearchControlsWrapper>
      <SearchBarWrapper>
        <SearchBar placeholder="search" />
      </SearchBarWrapper>
      <Facet>Musical Styles</Facet>
      <Facet>Mood / emotion</Facet>
      <Facet>Instrumentation</Facet>
      <Facet>Production Genre</Facet>
      <Facet>More Filters</Facet>
    </SearchControlsWrapper>
  );
}
