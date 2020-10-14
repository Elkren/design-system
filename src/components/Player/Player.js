import React, { useState } from "react";
import styled from "styled-components";

import { PlayIcon, PreviousIcon, NextIcon, PauseIcon } from "../../assets";
import { CircleProgressBar } from "../CircleProgressBar/CircleProgressBar";

const PlayerWrapper = styled.div`
  display: flex;
  width: 400px;
  height: 125px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const Artwork = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 5px 0 0 5px;
`;

const PlayerPanel = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const TrackTitle = styled.p`
  /* margin: 20px auto 10px auto; */
  margin: auto;
  font-weight: bold;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  span {
    font-weight: normal;
    font-size: 12px;
  }
`;

const PlayerControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;

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

const ProgressBarWrapper = styled.div`
  height: 2px;
  width: 65%;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 40px;
`;

const ProgressBar = styled.div`
  height: 2px;
  background: rgba(0, 0, 0, 1);
  border-radius: 40px;
`;

export function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerProgress, setPlayerProgress] = useState(100);

  const [fakePlay, setFakePlay] = useState(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setFakePlay(
      setInterval(() => {
        setPlayerProgress((playerProgress) => playerProgress - 1);
      }, 150)
    );
  };

  const handlePause = () => {
    setIsPlaying(false);
    clearInterval(fakePlay);
    setFakePlay(null);
  };

  return (
    <PlayerWrapper>
      <Artwork
        src="https://images.ctfassets.net/uygeax0v3i3l/6PJVmrqqMMOz8Qa5pOVngc/29449df7ba9378fc2800aec3c4e3470b/1001-FeatRelease-Classsical_Collection-Pastoral-3000x3000.jpg"
        alt=""
      />
      <PlayerPanel>
        <TrackTitle>
          Cello Prelude <span>3185/1</span>
        </TrackTitle>
        {/* <ProgressBarWrapper>
          <ProgressBar style={{ width: "25%" }} />
        </ProgressBarWrapper> */}
        <PlayerControls>
          <button>
            <PreviousIcon />
          </button>
          <CircleProgressBar progress={playerProgress} />
          {!isPlaying ? (
            <button onClick={handlePlay}>
              <PlayIcon />
            </button>
          ) : (
            <button onClick={handlePause}>
              <PauseIcon />
            </button>
          )}
          <button>
            <NextIcon />
          </button>
        </PlayerControls>
      </PlayerPanel>
    </PlayerWrapper>
  );
}
