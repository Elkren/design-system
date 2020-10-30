import React from 'react';
import styled from 'styled-components';

const FilterWrapper = styled.div`
    display: flex;
    height: 5rem;
    align-items: center;
    margin: 0 1rem 0 1rem;
    justify-content: space-between;
`;

const SortByDropdownWrapper = styled.div`
    /* & span {
        padding-top: 2px;
    } */
`

const SortByDropdown = styled.select`
    margin-top: -1px;
    border: none;
    outline: none;
`

const InstrumentationMixesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    & div {
        display: flex;
        align-items: center;
    }
`;

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 35px;

    & input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked {
            + span {
                background-color: black;     
                border: 1px solid transparent;           
                &:before{
                    -webkit-transform: translateX(25px);
                    -ms-transform: translateX(25px);
                    transform: translateX(25px);
                }       
            }
        }
    }
`

const Slider = styled.span`
    border-radius: 34px;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: #ccc; */
    border: 1px solid #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    &::before {
        border: 1px solid #ccc;
        border-radius: 50%;
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }
`

const SwitchLabel = styled.label`
    padding-left: 1rem;
`

export function SearchControlsFilterRow() {
    return (
        <FilterWrapper>
            510 results
            <InstrumentationMixesWrapper>
                <div>
                    <Switch>
                        <input id="instrumentation" type="checkbox" />
                        <Slider />
                    
                    </Switch>
                    <SwitchLabel for="instrumentation">
                        Instrumentation only
                    </SwitchLabel>      
                </div>
                <div>
                    <Switch>
                        <input id="hide-mixes" type="checkbox" />
                        <Slider />
                    
                    </Switch>
                    <SwitchLabel for="hide-mixes">
                        Hide mixes
                    </SwitchLabel>  
                </div>
            </InstrumentationMixesWrapper>

            <SortByDropdownWrapper>
                <label for="sortBy">sort by</label>
                <SortByDropdown name="sortBy" id="sortBy">                
                    <option>most relevant</option>
                    <option>most recent</option>
                </SortByDropdown>
            </SortByDropdownWrapper>
        </FilterWrapper>
    )
}
