import React from 'react';
import styled from "styled-components";
import { SearchTermsBar, SearchControls, SearchControlsFilterRow, SearchResults } from "../";

const SearchWrapper = styled.div`
    padding-top: 4em;
    width: calc(100% - 205px);
    margin-left: 205px;
`

export function Search() {
    return (
        <SearchWrapper>
            <SearchTermsBar />
            <SearchControls />
            <SearchControlsFilterRow />
            <SearchResults />
        </SearchWrapper>
    )
}
 