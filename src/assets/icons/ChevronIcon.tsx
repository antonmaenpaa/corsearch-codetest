import React from 'react';

type SVGProps = {
  className?: string;
};

const ChevronSVG: React.FC<SVGProps> = ({ className }) => (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 407.437 407.437"
    xmlSpace="preserve"
    className={className}
  >
    <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815" />
  </svg>
);

export default ChevronSVG;
