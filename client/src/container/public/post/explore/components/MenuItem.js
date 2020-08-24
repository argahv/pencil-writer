import React, { useState } from "react";
import { DashOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import { createStructuredSelector } from "reselect";
import { selectUser } from "../../../../selectors";
import {
  DeleteButton,
  PrimaryButton,
  openNotification,
} from "../../../../components";

import * as mapDispatchToProps from "../actions";

const MenuItem = ({ loading, postId, deletePost, getPost }) => {
  const [deleting, setDeleting] = useState(false);
  const onDelete = async () => {
    setDeleting(true);
    try {
      const deleted = await deletePost(postId);
      openNotification("success", deleted.message);
      setDeleting(false);
      getPost();
    } catch (error) {
      if (error.response.data.message) {
        openNotification("error", error.response.data.message);
      } else if (error.message) {
        openNotification("error", error.message);
      }
    }
  };

  const menuContent = () => (
    <>
      <Link to={`/post/edit/${postId}`}>
        <PrimaryButton width="50">Edit</PrimaryButton>
      </Link>
      {/* <br /> */}
      <PrimaryButton color="white" width="50">
        Hide
      </PrimaryButton>
      <DeleteButton onDelete={onDelete} loading={deleting} title="post">
        Delete
      </DeleteButton>
    </>
  );

  return (
    <Popover trigger="click" content={menuContent}>
      <DashOutlined
        style={{ fontSize: 25, fontWeight: "bold" }}
        // rotate={90}
        color={"white"}
      />
    </Popover>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
