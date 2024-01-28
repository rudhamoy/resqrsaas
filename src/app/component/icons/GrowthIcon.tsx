import * as React from "react";

function GrowthIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      // height="200px"
      width="10em"
      {...props}
      className="text-white"
    >
      <path d="M21.92 6.62a1 1 0 00-.54-.54A1 1 0 0021 6h-5a1 1 0 000 2h2.59L13 13.59l-3.29-3.3a1 1 0 00-1.42 0l-6 6a1 1 0 000 1.42 1 1 0 001.42 0L9 12.41l3.29 3.3a1 1 0 001.42 0L20 9.41V12a1 1 0 002 0V7a1 1 0 00-.08-.38z" />
    </svg>
  );
}

export default GrowthIcon;