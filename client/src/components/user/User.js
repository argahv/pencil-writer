import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { selectUser } from "../../container/selectors";
import { Link } from "@reach/router";
import { popContent } from "./popContent";
import {
  PrimaryButton,
  Paragraph,
  CircularTinyImage,
} from "../../container/components";

const User = ({ user }) => {
  const popoverContent = () => (
    <Menu>
      {popContent.map((content) => (
        <Menu.Item key={`content-${content.title}`}>
          {content.link === "/api/logout" ? (
            <a style={{ color: "red" }} href={content.link}>
              {content.title}
            </a>
          ) : (
            <Link to={content.link}>{content.title} </Link>
          )}
        </Menu.Item>
      ))}
    </Menu>
  );

  const userOption = () => {
    return (
      <>
        <div style={{ float: "left", padding: " 0 5px 0 0" }}>
          <CircularTinyImage source={user.userImage} alt={user.userName} />
        </div>
        <Dropdown overlay={popoverContent} style={{ float: "right" }}>
          <h5>
            {user.userName}
            {"   "}
            <span>
              <DownOutlined />
            </span>
          </h5>
        </Dropdown>
      </>
    );
  };

  const renderContent = () => {
    switch (user) {
      case null:
        return (
          <Link to="/login">
            <PrimaryButton width={70} curved color="#8d31d4">
              Login
            </PrimaryButton>{" "}
          </Link>
        );
      case "":
        return (
          <Link to="/login">
            <PrimaryButton width={70} curved color="#8d31d4">
              Login
            </PrimaryButton>{" "}
          </Link>
        );
      default:
        return userOption();
    }
  };
  return <div>{renderContent()}</div>;
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});
export default connect(mapStateToProps)(User);
