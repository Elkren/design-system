import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const CircleProgressBarWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 3px;
  margin-left: -2px;
  position: absolute;
  z-index: 0;  

  & svg * {    
    stroke-linejoin: round;
    stroke-linecap: round;
    vector-effect: non-scaling-stroke;
    }
  }
`;

export function CircleProgressBar({ progress }) {
  const calcProgress = (progress * 295.416) / 100;
  var springProps = useSpring({ value: calcProgress, from: { value: 0 } });
  return (
    <CircleProgressBarWrapper>
      <svg viewBox="0 0 100 100">
        <path
          d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
          stroke="#eee"
          strokeWidth="2.5"
          fillOpacity="0"
          shapeRendering="geometricPrecision"
        ></path>
        <animated.path
          d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
          stroke="black"
          strokeWidth="2.5"
          fillOpacity="0"
          shapeRendering="geometricPrecision"
          style={{
            strokeDasharray: "295.416, 295.416",
            strokeDashoffset: springProps.value,
          }}
        ></animated.path>
      </svg>
    </CircleProgressBarWrapper>
  );
}
