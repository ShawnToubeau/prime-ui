import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgPlus: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={20} {...props}>
      <path
        d="M11 9h9v2h-9v9H9v-9H0V9h9V0h2z"
        fill={ColorMap[props.fill]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgPlus;
