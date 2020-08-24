import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Skeleton, Row, Col, Tag } from "antd";
import { useInjectReducer } from "../../../../utils/injectReducer";
import * as mapDispatchToProps from "./actions";
import reducer from "./reducer";
import {
  selectLoading,
  selectPost,
  reduxKey,
  selectFires,
  selectPoints,
} from "./selectors";
import {
  Text,
  Paragraph,
  Head,
  CircularTinyImage,
  ShareButton,
} from "../../../components";
import ReactIcon from "./components/ReactIcon";
import { HeartOutlined, FireOutlined } from "@ant-design/icons";
import moment from "moment";
import MenuItem from "./components/MenuItem";
import { selectUser } from "../../../selectors";

const View = ({
  id,
  loading,
  post,
  fires,
  points,
  singlePostView,
  user,
  ...props
}) => {
  useInjectReducer({ key: reduxKey, reducer });

  useEffect(() => {
    singlePostView(id);
  }, [id]);

  const {
    title,
    author,
    tags,
    summary,
    category,
    image,
    content,
    createdAt,
  } = post;

  return (
    <Skeleton active loading={loading}>
      <Row>
        <Col span={24}>
          <Paragraph size={16} color="grey">
            {moment(createdAt).format("DD MMMM, YYYY")}
          </Paragraph>
        </Col>
      </Row>
      <Row>
        <Col lg={16} sm={24} xs={24}>
          <Head size={50}>{title}</Head>
        </Col>

        <Col
          style={{
            padding: 0,
            margin: "auto",
            float: "right",
            flexDirection: "row",
            display: "flex",
          }}
          lg={4}
          sm={24}
          xs={24}
        >
          <ReactIcon
            name="points"
            color="#b53531"
            info="Give 1 point to the author."
          >
            <HeartOutlined />
            <span>{points.count}</span>
          </ReactIcon>
          <ReactIcon
            name="fires"
            color="#fc0b03"
            info="Give 1 'fire' or 5 points to the author"
          >
            <FireOutlined />
            <span>{fires.count}</span>
          </ReactIcon>
        </Col>
        {user && user._id === author._authorId && (
          <Col lg={2} sm={24} xs={24}>
            <MenuItem postId={id} />
          </Col>
        )}
      </Row>

      {summary && (
        <Paragraph
          style={{ fontStyle: "italic" }}
          textAlign="justify"
          color="darkgrey"
          size={19}
        >
          "{summary}"
        </Paragraph>
      )}
      {image && (
        <img
          style={{
            width: "90%",
            height: "auto",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src={image}
          alt={title}
        />
      )}

      <div style={{ fontSize: 15, textAlign: "justify" }}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <br />
      <Row gutter={16}>
        <Col sm={12} xs={24} lg={12}>
          <Tag
            style={{
              padding: 10,
              textAlign: "center",
              fontSize: 25,
              fontWeight: "bold",
            }}
            color="#4119b0"
          >
            {category}
          </Tag>
        </Col>
        <Col style={{ float: "right" }} sm={12} xs={24} lg={12}>
          <Text textAlign="end" color="grey">
            -{" "}
            <span>
              <CircularTinyImage
                source={author.profilePic}
                alt={author.authorName}
              />
            </span>{" "}
            {author.authorName}
          </Text>
        </Col>
      </Row>
      <ShareButton />
    </Skeleton>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  post: selectPost,
  user: selectUser,
  fires: selectFires,
  points: selectPoints,
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
