import React from "react";
import { Line, Rect, Svg, Styles } from "react-native-svg";

const DashedLine = () => {
  return (
    <Svg
      width="50"
      height="170"
      viewBox="0 0 50 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        opacity="0.200428"
        x="0.25"
        y="0.25"
        width="49.5"
        height="0.5"
        stroke="#30324E"
        stroke-width="0.5"
        stroke-dasharray="4 4"
      />
      <Line x1="0" y1="3" x2="30" y2="3" stroke-dasharray="4" fill="black" />
    </Svg>
  );
};

export { DashedLine };
