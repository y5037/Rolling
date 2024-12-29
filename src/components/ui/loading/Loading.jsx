

import React from "react";
import FadeLoader from "react-spinners/FadeLoader";


export default function Loading({ className }) {

  return (
    <div
      className={className}>
      <FadeLoader
        color="var(--Primary)"
        height={15}
        width={5}
        radius={2}
        margin={2}
      />
    </div>
  )

}