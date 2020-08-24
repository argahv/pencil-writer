import React from "react";

const breakPoints = {
  xs: "480",
  sm: "576",
  md: "768",
  lg: "992",
  xl: "1200",
  xxl: "1600",
};

const useBreakPoints = (
  width = "",
  firstContainer = null,
  secondContainer = null
) => {
  if (window.innerWidth <= +breakPoints[width]) {
    return firstContainer;
  }
  return secondContainer;
};

export default useBreakPoints;
