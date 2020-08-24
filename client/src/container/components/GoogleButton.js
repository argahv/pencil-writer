import React from "react";
import PrimaryButton from "../components/Animation/PrimaryButton";
import { GoogleOutlined } from "@ant-design/icons";

const GoogleButton = () => {
  return (
    <a href={`/auth/google`}>
      <PrimaryButton
        icon={<GoogleOutlined />}
        fontWeight="bold"
        buttonBackground="#DB4437"
        color="white"
        curved
        type="default"
      >
        Login with Google
      </PrimaryButton>
    </a>
  );
};

export default GoogleButton;
