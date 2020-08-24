import React from "react";

const CircularLargeImage = ({ style = {}, source = "", alt = "" }) => {
  return (
    <img
      width="200"
      height="auto"
      style={{
        ...style,
        borderRadius: "50%",
      }}
      src={source}
      alt={alt}
    />
  );
};

export default CircularLargeImage;
