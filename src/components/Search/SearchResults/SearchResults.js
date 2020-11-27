import React from "react";
import styled from "styled-components";
import { SearchRow } from "../../";

const SearchResultsWrapper = styled.div`
  margin: auto 1rem auto 1rem;
  > div {
    border-top: 1px solid grey;
  }
  > div:last-of-type {
    border-bottom: 1px solid grey;
  }
`;

export function SearchResults() {
  return (
    <SearchResultsWrapper>
      <SearchRow
        title="Fling Notes"
        albumInfo="2904/8"
        mixesCount={10}
        composers="Sean Allen"
        description="Bass-led trap beats with hooky keys & rap vocal"
        duration="3:52"
      />
      <SearchRow
        title="Dawn of Destiny"
        albumInfo="3265/3"
        mixesCount={8}
        composers="Debbie Wiseman | Stephen Fry"
        description="Birdlike flute solo builds with orchestra through dramatic to gentle & lifting theme"
        duration="2:21"
      />
    </SearchResultsWrapper>
  );
}
