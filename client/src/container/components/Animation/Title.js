import React from "react";
import posed from "react-pose";

const Title = posed.h1({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
});

export default ({
  style = {},
  onClick = () => {},
  children,
  color = "#f238e0",
  size = 45,
  textAlign = "",
}) => (
  <Title
    onClick={onClick}
    style={{
      ...style,
      color,
      fontSize: size,
      fontFamily: ["Dancing Script", "cursive"],
      textAlign,
    }}
  >
    {children}
  </Title>
);
