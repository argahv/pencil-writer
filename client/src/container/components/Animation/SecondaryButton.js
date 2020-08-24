import React from "react";
import { Button } from "antd";
import { motion } from "framer-motion";

const SecondaryButton = ({
  //   onClick = () => {},
  icon = "",
  curved = false,
  color = "#7f33f2",
  borderColor = "#7f33f2",
  children,
  htmlType = "",
  widthBefore = 300,
  loading = false,
  disabled = false,
}) => {
  return (
    <motion.div
      style={{ width: widthBefore, margin: "auto" }}
      whileHover={{ width: widthBefore + 40 }}
    >
      <Button
        icon={icon}
        // onClick={htmlType === "submit" ? null : onClick}
        disabled={disabled}
        loading={loading}
        style={{
          borderRadius: curved ? 30 : 0,
          borderWidth: 2,
          borderColor: borderColor,
          color: color,
        }}
        block
        htmlType={htmlType}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default SecondaryButton;
