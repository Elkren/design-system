import React from 'react'
import styled from 'styled-components'
import { PlayIcon, PreviousIcon, NextIcon, SpeakerIcon, ElipsesIcon, PlusIcon } from "../../assets";
import { CircleProgressBar } from "../CircleProgressBar/CircleProgressBar";


const FullPlayerWrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    height: 4em;
    bottom: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0px -2px 40px -3px rgba(0,0,0,0.35);
`

const CurrentTrackInfo = styled.div`
    display: flex;    
    align-items: center;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 3rem;
    margin-left: 0.5rem;
`

const ArtistName = styled.span`
    font-size: 14px;
`

const Artwork = styled.img`
    width: 3em;
    height: 3em;  
    margin: 0.5em;
`;


const PlayerControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 

  button {
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background: none;
    height: 50px;
    width: 50px;
    z-index: 1;

    outline: none;
    cursor: pointer;

    &:hover {
      * {
        stroke: black;
      }
    }
  }
`;

const Duration = styled.div`
    display: flex;  
    align-self: center;        
    text-align: center;
    margin: auto 1rem auto 1rem;
`

const Waveform = styled.div`
    width: 40%;
    background-color: grey;
    height: 80%;    
    align-self: center;
`

const VolumeSectionWrapper  = styled.div`
    display: flex;
    align-items: center;    
    margin: auto 1rem auto 1rem;
    & button {
        border: none;
        background: none;
    }
`

const VolumeBarWrapper = styled.div`
    margin: auto 10px auto 10px ;
    height: 2px;  
    background: rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    width: 100px;
`;

const VolumeBar = styled.div`
    height: 2px;
    background: rgba(0, 0, 0, 1);
    border-radius: 40px;
    width: 30px;    
`;

const MoreActionsWrapper = styled.div`
    display: flex;
    align-items: center;    
`;

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

export function FullPlayer() {
    return (
        <FullPlayerWrapper>
            <CurrentTrackInfo>
                <Artwork
                src="https://images.ctfassets.net/uygeax0v3i3l/6PJVmrqqMMOz8Qa5pOVngc/29449df7ba9378fc2800aec3c4e3470b/1001-FeatRelease-Classsical_Collection-Pastoral-3000x3000.jpg"
                alt=""
                />
                <TextWrapper>
                    <span><strong>Track Name</strong></span>
                    <ArtistName>Artist Name</ArtistName>
                </TextWrapper>
            </CurrentTrackInfo>
            <PlayerControls>
                <button>
                    <PreviousIcon />
                </button>
                <CircleProgressBar progress={100} />
                <button>
                    <PlayIcon />
                </button>
                <button>
                    <NextIcon />
                </button>
            </PlayerControls>
            <Duration>
                1:23
            </Duration>
            <Waveform />
            <VolumeSectionWrapper>
                <button>
                    <SpeakerIcon />
                </button>
                <VolumeBarWrapper>
                    <VolumeBar/>
                </VolumeBarWrapper>
            </VolumeSectionWrapper>
            <MoreActionsWrapper>
                <MoreActionsButton>
                    <ElipsesIcon/>
                </MoreActionsButton>
                <MoreActionsButton>
                    <PlusIcon/>
                </MoreActionsButton>
                <LicenceButton>
                    Licence
                </LicenceButton>
            </MoreActionsWrapper>
        </FullPlayerWrapper>
    )
}
