import React from "react";
import { Link } from "@reach/router";
import { motion } from "framer-motion";

const LinkedHeader = ({
  children,
  to = "#",
  textAlign = "start",
  fontWeight = "",
  color = "yellow",
  size = 40,
}) => {
  return (
    <>
      <Link to={to}>
        <motion.h1
          style={{ fontFamily: ["Yanone Kaffeesatz", "sans-serif"], textAlign }}
          animate={{ color, fontSize: size }}
          whileHover={{ color: "#f238e0", fontSize: size + 8 }}
        >
          {children}
        </motion.h1>
      </Link>
    </>
  );
};

export default LinkedHeader;
