import React from "react";
import { Row, Col, Tabs } from "antd";
import { connect } from "react-redux";
import moment from "moment";
import { createStructuredSelector } from "reselect";
import { selectUser } from "../../selectors";
import {
  CircularLargeImage,
  Text,
  Paragraph,
  PrimaryButton,
} from "../../components";
import Scores from "./components/Scores";
import { reduxKey, selectPostLength } from "./selectors";
import { useInjectReducer } from "../../../utils/injectReducer";
import reducer from "./reducer";
import Posts from "./components/Posts";

const Profile = ({ user, postNumber }) => {
  useInjectReducer({ key: reduxKey, reducer });

  return (
    <div>
      <CircularLargeImage
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        source={user.userImage}
        alt={user.userName}
      />
      <br />
      <Row>
        <Col span={24}>
          <Paragraph
            margin={0}
            color="white"
            textAlign="center"
            fontWeight="bold"
          >
            {user.userName}
          </Paragraph>
          <Paragraph color="grey" size={20} textAlign="center">
            {user.email}
          </Paragraph>
          <Text size={20}>
            Member since {moment(user.createdAt).format("DD MMMM, YYYY")}
          </Text>
        </Col>
      </Row>
      <Tabs
        style={{ padding: ".5rem" }}
        size="large"
        tabPosition={window.innerWidth < 480 ? "top" : "left"}
      >
        <Tabs.TabPane key="1" tab="Scores">
          <Scores />
        </Tabs.TabPane>
        <Tabs.TabPane key="2" tab="Posts">
          <Paragraph color="grey" size={20}>
            You have posted {postNumber} contents.
          </Paragraph>
          <Posts />
        </Tabs.TabPane>
        <Tabs.TabPane key="3" tab="Draft">
          Drafts
        </Tabs.TabPane>
      </Tabs>
      <Col style={{ textAlign: "center" }} span={24}>
        <a href="/api/logout">
          <PrimaryButton curved color="red">
            Logout
          </PrimaryButton>
        </a>
      </Col>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  postNumber: selectPostLength,
});

export default connect(mapStateToProps)(Profile);
