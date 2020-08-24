import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Row, Col, Tag } from "antd";
import { Link } from "@reach/router";
import moment from "moment";
import { selectPost } from "../selectors";
import * as mapDispatchToProps from "../actions";
import {
  Card,
  ReactIcon,
  Paragraph,
  Head,
  LinkedHeader,
} from "../../../components";
import { HeartOutlined, FireOutlined } from "@ant-design/icons";
import MenuItem from "./MenuItem";

const Posts = ({ posts, getUserPosts }) => {
  useEffect(() => {
    getUserPosts();
  }, []);

  if (posts.length > 0) {
    return (
      <Row gutter={[8, 8]}>
        {posts.map(({ _id, title, createdAt, summary, content, category }) => {
          return (
            <Col key={`user-post-${title}-${createdAt}`} lg={6} xs={24} sm={12}>
              <Card style={{ height: 250 }}>
                <Row>
                  <Col style={{ float: "left" }} span={12}>
                    <Tag
                      style={{
                        padding: 5,
                        textAlign: "center",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                      color="#4119b0"
                    >
                      {category}
                    </Tag>
                  </Col>
                  <Col span={12}>
                    <MenuItem postId={_id} />
                  </Col>
                </Row>
                <br />
                <Paragraph color="grey" size={15}>
                  {moment(createdAt).format("MM/DD/YYYY")}
                </Paragraph>
                <LinkedHeader size={18} to={`/view-post/${_id}`}>
                  {title.length > 18 ? `${title.substring(0, 18)}...` : title}
                </LinkedHeader>
                <Paragraph size={15} color="white">
                  {summary ? (
                    `${summary.substring(0, 15)}...`
                  ) : (
                    <span
                      style={{ padding: 0, margin: 0 }}
                      dangerouslySetInnerHTML={{
                        __html: `${content.substring(0, 45)}`,
                      }}
                    />
                  )}
                </Paragraph>

                {/* Likes */}
                <Row style={{ float: "left", textAlign: "start" }}>
                  {/* <Col style={{ padding: 5 }} span={12}> */}
                  <ReactIcon
                    animated={false}
                    color="#b53531"
                    info="Give 1 point to the author."
                  >
                    <HeartOutlined />
                    {/* <span>{"" || score.points.count}</span> */}
                  </ReactIcon>
                  {/* </Col> */}
                  {/* <Col style={{ padding: 5 }} span={12}> */}
                  <ReactIcon
                    animated={false}
                    color="#fc0b03"
                    info="Give 1 'fire' or 5 points to the author"
                  >
                    <FireOutlined />
                    {/* <span>{"" || score.fires.count}</span> */}
                  </ReactIcon>
                  {/* </Col> */}
                </Row>
              </Card>
              {/* </List> */}
            </Col>
          );
        })}
      </Row>
    );
  }

  return (
    <Card hoverable={false}>
      <Paragraph>No content at the moment</Paragraph>
      <LinkedHeader to="/post/create">Create your own</LinkedHeader>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectPost,
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
