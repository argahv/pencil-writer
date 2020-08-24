import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import { Row, Skeleton, Col } from "antd";
import {
  reduxKey,
  selectLoading,
  selectPosts,
  selectQuery,
  selectPaginator,
} from "./selectors";
import { createStructuredSelector } from "reselect";
import { getPost, setValue } from "./actions";
import { useInjectReducer } from "../../../../utils/injectReducer";
import reducer from "./reducers";
import {
  Title,
  openNotification,
  Paragraph,
  Text,
  PrimaryButton,
} from "../../../components";
import ListItem from "./components/ListItem";
import Filter from "./components/Filter";

const Explore = ({
  query,
  paginator,
  getPost,
  setValue,
  loading,
  ...props
}) => {
  useInjectReducer({ key: reduxKey, reducer });

  const handleFetchData = () => {
    try {
      getPost();
    } catch (error) {
      if (error.message) openNotification("error", error.message);
    }
  };

  // useEffect(() => {
  //   if (props.location.state) {
  //     const { searchField, searchValue } = props.location.state;
  //     const search = {
  //       searchField: searchField || "" || [],
  //       searchValue: searchValue || "" || [],
  //     };

  //     setValue({
  //       key: "query",
  //       index: "search",
  //       value: search,
  //     });
  // } else {
  //   const search = {
  //     searchField: "" || [],
  //     searchValue: "" || [],
  //   };

  //   setValue({
  //     key: "query",
  //     index: "search",
  //     value: search,
  //   });
  // }
  // }, [props.location.state]);

  useEffect(() => {
    handleFetchData();
  }, [query]);

  const filteredBy = () => {
    const { search } = query;
    const { searchField } = search;
    if (Array.isArray(searchField)) {
      searchField.map((field) => {
        return <Text>{field}</Text>;
      });
    } else if (typeof searchField === "string") {
      return searchField;
    }
  };

  const handleLoadMore = () => {
    if (paginator.hasNextPage) {
      setValue({
        key: "query",
        index: "limit",
        value: query.limit + 10,
      });
    }
  };

  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col lg={8} sm={12} xs={24}>
          <Title>Explore</Title>{" "}
        </Col>
        <Col lg={8} sm={12} xs={24}>
          {query.search.searchField.length > 0 && (
            <Paragraph size={25} color="white">
              Exploring "{filteredBy()}"
            </Paragraph>
          )}
        </Col>
        <Col lg={8} sm={24} xs={24}>
          <Filter />
        </Col>
      </Row>
      {/* <Skeleton active loading={loading}> */}

      <ListItem />
      {/* </Skeleton> */}
      {paginator.hasNextPage && (
        <PrimaryButton onClick={handleLoadMore} curved>
          Load More...
        </PrimaryButton>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  posts: selectPosts,
  query: selectQuery,
  paginator: selectPaginator,
});

export default connect(mapStateToProps, { getPost, setValue })(Explore);
