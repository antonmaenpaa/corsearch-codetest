import React from "react";

type SVGProps = {
  className?: string;
};

const SearchSVG: React.FC<SVGProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
  >
    <g id="Group_900" data-name="Group 900" transform="translate(0.75 0.75)">
      <circle
        id="Ellipse_143"
        data-name="Ellipse 143"
        cx="7.505"
        cy="7.505"
        r="7.505"
        transform="translate(0 0)"
        fill="none"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <line
        id="Line_144"
        data-name="Line 144"
        x1="5.192"
        y1="5.192"
        transform="translate(12.808 12.808)"
        fill="none"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </g>
  </svg>
);

export default SearchSVG;
