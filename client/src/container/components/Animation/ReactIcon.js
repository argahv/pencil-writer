import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "antd";

const ReactIcon = ({ children, info, animated = true, color = "" }) => {
  const [iconSize] = useState(30);
  return (
    <Tooltip title={info}>
      <motion.h1
        whileHover={{ fontSize: animated && iconSize + 10 }}
        style={{ color, fontSize: iconSize }}
        whileTap={{ color: "grey" }}
      >
        {children}
      </motion.h1>
    </Tooltip>
  );
};

export default ReactIcon;
