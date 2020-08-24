import React from "react";
import { motion } from "framer-motion";

const Paragraph = ({
  onClick = () => {},
  margin = "",
  style = {},
  children,
  fontWeight = "",
  color = "#f238e0",
  size = 45,
  textAlign = "",
}) => (
  <motion.h1
    onClick={onClick}
    style={{
      ...style,
      margin,
      fontWeight,
      textAlign,
      color: color,
      fontSize: size,
      fontFamily: ["Yanone Kaffeesatz", "sans-serif"],
    }}
  >
    {children}
  </motion.h1>
);

export default Paragraph;
