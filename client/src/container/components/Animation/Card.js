import React from "react";
import { Card as ACard } from "antd";
import { motion } from "framer-motion";

const Card = ({
  hoverable = true,
  children,
  style = {},
  onHoverStart = () => {},
  onHoverEnd = () => {},
  // key = "",
  background = "",
  backgroundImage = "",
}) => {
  return (
    <motion.div
      onHoverStart={hoverable && onHoverStart}
      onHoverEnd={hoverable && onHoverEnd}
      // key={key}
      whileHover={{
        scale: hoverable && 1.05,
        margin: hoverable && ".5rem",
      }}
    >
      <ACard
        bordered={false}
        style={{
          ...style,
          // minHeight: 350,
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 1)",
          background,
          backgroundImage: `url(${backgroundImage})`,
          // borderRadius: 20,
        }}
        hoverable={hoverable}
      >
        {children}
      </ACard>
    </motion.div>
  );
};

export default Card;
