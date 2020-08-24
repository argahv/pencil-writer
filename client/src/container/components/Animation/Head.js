import React from "react";
import { motion } from "framer-motion";

const Head = ({ children, color = "#f238e0", size = 45, textAlign = "" }) => (
  <motion.h1
    style={{
      color: color,
      textAlign,
      fontSize: size,
      fontFamily: ["Abril Fatface", "cursive"],
    }}
  >
    {children}
  </motion.h1>
);

export default Head;
