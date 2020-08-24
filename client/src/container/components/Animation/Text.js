import React from "react";
import posed from "react-pose";

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
});

const Text = ({
  style = {},
  onClick = () => {},
  children,
  fontWeight = "",
  color = "#7f33f2",
  textAlign = "center",
  size = 30,
}) => {
  return (
    <P
      onClick={onClick}
      style={{
        ...style,
        fontWeight,
        textAlign,
        color: color,
        fontFamily: ["Hind Madurai", "sans-serif"],
        fontSize: size,
      }}
    >
      {children}
    </P>
  );
};

export default Text;
