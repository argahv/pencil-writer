import React from "react";
import PrimaryButton from "./Animation/PrimaryButton";
import { FacebookOutlined } from "@ant-design/icons";

const FacebookButton = () => {
  return (
    <a href="/auth/facebook">
      <PrimaryButton
        icon={<FacebookOutlined />}
        fontWeight="bold"
        buttonBackground="#3b5998"
        color="white"
        curved
        type="default"
      >
        Login with Facebook
      </PrimaryButton>
    </a>
  );
};

export default FacebookButton;
