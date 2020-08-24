import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const CircularTinyImage = ({ source = "", alt = "" }) => {
  return (
    <Avatar icon={<UserOutlined />} src={source} alt={alt.substring(0, 1)} />
  );
};

export default CircularTinyImage;
