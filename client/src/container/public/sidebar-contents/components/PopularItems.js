import React from "react";
import { Skeleton, List, Tag, Avatar } from "antd";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectData, selectLoading } from "../selectors";
import { Paragraph, LinkedHeader } from "../../../components";
import { navigate } from "@reach/router";

const PopularItems = ({ loadData, data, loading }) => {
  const handleCategoryQuery = (searchField, searchValue) => {
    navigate("/explore", {
      state: {
        searchField,
        searchValue,
      },
    });
  };

  const renderList = () => (
    <List
      size="small"
      // style={{ margin: 0, padding: 0 }}
      itemLayout="horizontal"
      dataSource={data[loadData]}
      renderItem={(item) => {
        if (typeof item === "string") {
          return (
            <Tag
              onClick={() => handleCategoryQuery("category", item)}
              style={{
                textAlign: "center",
                fontWeight: "bold",
                margin: 4,
              }}
              color="#4119b0"
            >
              {item}
            </Tag>
          );
        }
        return (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.authorAvatar} />}
              title={
                <LinkedHeader
                  color="#c4c2c2"
                  fontWeight="bold"
                  size={15}
                  to={`/view-post/${item._id}`}
                >
                  {item.title.length > 15
                    ? `${item.title.substring(0, 15)}...`
                    : item.title}
                </LinkedHeader>
              }
              description={
                <Paragraph color="grey" size={13}>
                  {item.summary && item.summary.length > 20
                    ? `${item.summary.substring(0, 20)}...`
                    : item.summary}
                </Paragraph>
              }
            />
          </List.Item>
        );
      }}
    />
  );

  return (
    <Skeleton active loading={loading}>
      <div style={{ margin: 10, padding: 10 }}>
        <Paragraph
          fontWeight="bold"
          margin={0}
          textAlign=""
          color="#e3e2e2"
          size={20}
        >
          {loadData === "popularPosts" ? "Popular Posts" : "Popular Categories"}
        </Paragraph>
        <div>{renderList()}</div>
      </div>
    </Skeleton>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectData,
  loading: selectLoading,
});

export default connect(mapStateToProps)(PopularItems);
