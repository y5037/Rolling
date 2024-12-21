import { useEffect, useState } from "react";

const UseDevice = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  console.log("windowWidth : ", windowWidth);

  let mode = "desktop";

  if (windowWidth < 1248 && windowWidth >= 768) {
    mode = "tablet";
  } else if (windowWidth < 768) {
    mode = "mobile";
  }

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setWindowWidth(event.target.innerWidth);
    });
  });

  return {
    mode,
  };
};

export default UseDevice;
