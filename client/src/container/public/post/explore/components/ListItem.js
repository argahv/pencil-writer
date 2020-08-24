import React, { useState } from "react";
import posed from "react-pose";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Col, Row, Tag } from "antd";
import moment from "moment";
import { HeartOutlined, FireOutlined } from "@ant-design/icons";
import { selectPosts, selectLoading } from "../selectors";
import {
  Head,
  Paragraph,
  CircularTinyImage,
  LinkedHeader,
  Text,
  ReactIcon,
  Card,
} from "../../../../components";
import MenuItem from "./MenuItem";
import { selectUser } from "../../../../selectors";
import * as mapDispatchToProps from "../actions";

const Div = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
});

const ListItem = ({ loading, posts, hasMore, ...props }) => {
  const [hovered, setHovered] = useState(null);

  const handleCategoryQuery = (searchField, searchValue) => {
    props.setValue({
      key: "query",
      index: "search",
      value: {
        searchField,
        searchValue,
      },
    });
  };

  return (
    <Div>
      <Row style={{ alignContent: "center" }} gutter={[20, 20]}>
        {/* <Skeleton active loading={loading}> */}
        {posts.length > 0 ? (
          posts.map(
            ({
              title,
              _id,
              category,
              points,
              fires,
              image,
              summary,
              createdAt,
              author,
              content,
            }) => {
              return (
                <Col
                  key={`explore-post-${title}-${createdAt}`}
                  lg={8}
                  xs={24}
                  sm={12}
                >
                  <Card
                    style={{ height: 350 }}
                    onHoverStart={() => setHovered(_id)}
                    onHoverEnd={() => setHovered(null)}
                    // key={`post-${title}-${_id}`}
                  >
                    <Row>
                      <div style={{ width: "100%" }}>
                        <div
                          style={{
                            width: 200,
                            float: "left",
                            margin: "1rem 0 1rem 0",
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <div style={{ flex: 1, padding: " 1px 8px 0 0" }}>
                            <CircularTinyImage
                              source={author.profilePic}
                              alt={author.authorName}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flex: "4",
                              flexDirection: "column",
                            }}
                          >
                            <Text
                              size={15}
                              style={{
                                flex: 2,
                                margin: "0 1px 0 1px",
                                width: "max-content",
                              }}
                            >
                              {author.authorName}
                            </Text>
                            <span
                              style={{ flex: 2, fontSize: 10, color: "grey" }}
                            >
                              {moment(createdAt).format("DD MMM, YYYY")}{" "}
                            </span>
                          </div>
                        </div>
                        <div style={{ float: "right" }}>
                          {props.user &&
                            props.user._id === author._authorId && (
                              <MenuItem postId={_id} />
                            )}
                        </div>
                      </div>
                    </Row>
                    <Tag
                      onClick={() => handleCategoryQuery("category", category)}
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
                    <Head size={25}>
                      {title.length > 25
                        ? `${title.substring(0, 25)}...`
                        : title}
                    </Head>
                    <Paragraph size={20} color="white">
                      {summary ? (
                        summary.length > 40 ? (
                          `${summary.substring(0, 40)}...`
                        ) : (
                          summary
                        )
                      ) : (
                        <span
                          style={{ padding: 0, margin: 0 }}
                          dangerouslySetInnerHTML={{
                            __html:
                              content.length > 45
                                ? `${content.substring(0, 45)}...`
                                : content,
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
                        <span>{points.count}</span>
                      </ReactIcon>
                      {/* </Col> */}
                      {/* <Col style={{ padding: 5 }} span={12}> */}
                      <ReactIcon
                        animated={false}
                        color="#fc0b03"
                        info="Give 1 'fire' or 5 points to the author"
                      >
                        <FireOutlined />
                        <span>{fires.count}</span>
                      </ReactIcon>
                      {/* </Col> */}
                    </Row>
                    {hovered === _id && (
                      <LinkedHeader to={`/view-post/${_id}`}>
                        Read it.
                      </LinkedHeader>
                    )}
                    {window.innerWidth <= 768 && (
                      <LinkedHeader to={`/view-post/${_id}`}>
                        Read it.
                      </LinkedHeader>
                    )}
                  </Card>
                  {/* </List> */}
                </Col>
              );
            }
          )
        ) : (
          <Paragraph color="grey" textAlign="center">
            Sorry, No contents found...
          </Paragraph>
        )}
        {/* </Skeleton> */}
      </Row>
    </Div>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
  loading: selectLoading,
  user: selectUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
