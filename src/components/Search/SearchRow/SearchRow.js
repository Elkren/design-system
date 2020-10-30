import React from 'react'
import styled from 'styled-components'

import { PlayIcon, ElipsesIcon, PlusIcon } from "../../../assets/icons";

const SearchRowWrapper = styled.div`
    display: flex;
    align-items: center;    
    height: 5rem;
`;

const PlayButton = styled.button`
    background-color: white;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 1px solid grey;    
    border-radius: 100%;
    box-shadow: 0px 0px 52px -15px rgba(0,0,0,1);
    background: none;
    height: 45px;
    width: 45px;
    min-width: 45px;
    z-index: 1;
    outline: none;
    cursor: pointer;
    & svg {
        display: flex;
        align-items: center;    
        margin: auto;   
        width: 35px;
        height: 35px;
    }
`

const Title = styled.a`    
    text-decoration: none;
    color: black;
    & span {
        color: grey;
        font-size: 14px;
    }
`;

const MixesButton = styled.button`
    color: grey;
    font-size: 14px;
    padding: 2px 5px 2px 5px;
    margin-left: 10px;
    background: none;
    cursor: pointer;
    border: 1.5px solid grey;
    border-radius: 5px;    
    box-shadow: 0px 0px 52px -15px rgba(0,0,0,1);
`;

const Composers = styled.span`
    color: grey;
    font-size: 14px;
    margin-left: 10px;
    cursor: pointer;
`;

const Description = styled.span`
    color: grey;
    font-size: 14px;
`

const TrackInformationWrapper = styled.div`
    height: 3rem;
    min-width: 550px;    
    margin-left: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    margin-right: auto;
`;

const Waveform = styled.div`
    height: 70%;
    width: 50%;
    background-color: grey;
    margin-right: 2rem;
`

const Duration = styled.span`
    font-size: 0.9rem;
    margin-right: 0.7rem;
`

const TrackActionsWrapper = styled.div`
    display: flex;
    align-items: center; 
`
const MoreActionsButton = styled.button`
    border: none;
    background: none;
    margin-right: 0.4rem;
`;

const LicenceButton = styled.button`
    border: none;
    border-radius: 2px;
    text-transform: uppercase;
    background-color: #22272a;
    color: white;
    font-size: 0.8rem;
    line-height: 1.5;
    padding: 0.625em 1em;
    letter-spacing: 0.0625em;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;   
    margin-right: 0.4rem; 
`

export function SearchRow({
    title, 
    albumInfo, 
    mixesCount, 
    composers, 
    description,
    duration
}) {
    return (
        <SearchRowWrapper>
            <PlayButton>
                <PlayIcon/>
            </PlayButton>
            <TrackInformationWrapper>
                <div>
                    <Title href="#">
                        {title} <span>{albumInfo}</span>
                    </Title>
                    <MixesButton>
                        {mixesCount} mixes
                    </MixesButton>
                    <Composers>{composers}</Composers>
                </div>
                <Description>{description}</Description>
            </TrackInformationWrapper>
            <Waveform />
            <TrackActionsWrapper>
                <Duration>
                    {duration}
                </Duration>
                <MoreActionsButton>
                    <ElipsesIcon/>
                </MoreActionsButton>
                <MoreActionsButton>
                    <PlusIcon/>
                </MoreActionsButton>
                <LicenceButton>
                    Licence
                </LicenceButton>
            </TrackActionsWrapper>
        </SearchRowWrapper>
    )
}
