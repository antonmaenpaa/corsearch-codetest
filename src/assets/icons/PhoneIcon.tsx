import React from 'react';

type SVGProps = {
  className?: string;
};

const PhoneSVG: React.FC<SVGProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 225 225"
    preserveAspectRatio="xMidYMid meet"
    className={className}
  >
    <g
      transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path d="M349 2226 c-115 -33 -231 -131 -283 -240 -122 -257 -67 -624 145 -972 126 -207 333 -445 523 -598 190 -155 499 -329 668 -377 116 -33 343 -33 463 -1 213 58 324 161 371 344 10 39 14 77 9 107 -12 87 -32 104 -282 249 -201 116 -235 132 -274 132 -65 0 -123 -41 -202 -143 -69 -87 -103 -117 -135 -117 -25 0 -184 96 -278 168 -98 74 -233 213 -306 312 -63 87 -143 216 -152 245 -9 31 25 77 96 130 130 99 168 146 168 209 0 48 -2 51 -162 321 l-143 240 -90 2 c-50 1 -111 -4 -136 -11z" />
    </g>
  </svg>
);

export default PhoneSVG;
