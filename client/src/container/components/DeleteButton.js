import React, { useState } from "react";
import { Button } from "antd";
import { motion } from "framer-motion";

const DeleteButton = ({
  onDelete = () => {},
  widthBefore = "300",
  children,
  loading = false,
  curved = false,
  borderColor = "red",
  color = "red",
  htmlType = "",
  size = "",
  icon = "",
  shape = "",
  disabled = false,
  title = "",
}) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const confirm = () => {
    if (confirmDelete) {
      onDelete();
      // setConfirmDelete(false);
    } else {
      setConfirmDelete(true);
    }
  };

  return (
    <motion.div
      style={{ width: widthBefore, margin: "auto" }}
      whileHover={{ width: widthBefore + 40 }}
    >
      <Button
        icon={icon}
        onClick={confirm}
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
        {!confirmDelete ? children : "Sure?!"}
      </Button>
    </motion.div>
  );
};
export default DeleteButton;
