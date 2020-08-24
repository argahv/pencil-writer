import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions";
import { createStructuredSelector } from "reselect";
import { useParams, navigate, useLocation } from "@reach/router";
import { selectUser } from "../../../../selectors";
import { selectPost } from "../selectors";
import { message } from "antd";
import {
  PrimaryButton,
  openNotification,
  Paragraph,
  LinkedHeader,
} from "../../../../components";

const ReactIcon = ({
  user,
  name,
  children,
  info,
  post,
  color = "",
  ...props
}) => {
  const params = useParams();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const hasUserGivenScore = user && post[name]["users"].includes(user.userId);

  const handleScores = async () => {
    setButtonDisabled(!buttonDisabled);
    if (!user) {
      message.info(
        <span>
          <Paragraph color="grey" size={20}>
            You must login to give points
          </Paragraph>
          <LinkedHeader size={21} color="lightblue" to="/login">
            Click Here to go to login page
          </LinkedHeader>
        </span>
      );
    }

    if (user && !hasUserGivenScore) {
      try {
        await props.increaseProfits(params.id, name);
      } catch (error) {
        console.log("error", error);
        setButtonDisabled(!buttonDisabled);
      }
    }
  };

  return (
    <PrimaryButton
      color={!hasUserGivenScore || buttonDisabled ? color : "grey"}
      onClick={handleScores}
      disabled={buttonDisabled || hasUserGivenScore}
    >
      {children}
    </PrimaryButton>
  );
};

const mapStateToProps = createStructuredSelector({
  post: selectPost,
  user: selectUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactIcon);
