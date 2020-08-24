import React, { useState } from "react";
import { Button } from "antd";
import { motion } from "framer-motion";

const PrimaryButton = ({
  onKeyPressCapture = () => {},
  onClick = () => {},
  curved = false,
  children,
  htmlType = "",
  width = 300,
  icon = "",
  loading = false,
  disabled = false,
  fontWeight = "",
  fontSize = 20,
  heightAfterHover = 40,
  color = "#f238e0",
  buttonBackground = "none",
}) => {
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <motion.div
      style={{ width, margin: "auto" }}
      onHoverStart={() => setButtonHovered(true)}
      onHoverEnd={() => setButtonHovered(false)}
      whileHover={{ width: width + 10 }}
    >
      <Button
        onKeyPressCapture={onKeyPressCapture}
        onClick={onClick}
        icon={icon}
        disabled={disabled}
        loading={loading}
        style={{
          boxShadow: ` 0 0 10px #2D3A47 `,
          backgroundColor: buttonBackground,
          fontWeight,
          borderRadius: curved ? 30 : 0,
          borderWidth: 1,
          borderColor: color,
          color,
          // padding: buttonHovered && 10,
          fontSize: buttonHovered && fontSize,
          height: buttonHovered && heightAfterHover,
        }}
        block
        htmlType={htmlType}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default PrimaryButton;
