import React, { useEffect } from "react";
import { Col, Affix } from "antd";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { useLocation } from "@reach/router";
import { Title, useBreakPoints } from "../../components";
import PopularItems from "./components/PopularItems";
import { useInjectReducer } from "../../../utils/injectReducer";
import { reduxKey, selectCategoriesList } from "./selectors";
import reducer from "./reducer";
import * as mapDispatchToProps from "./actions";
import { User } from "../../../components";

const SidebarContents = ({ sideDataLoad }) => {
  useInjectReducer({ key: reduxKey, reducer });
  const postLoad = () => {
    sideDataLoad();
  };

  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    postLoad();
  }, [pathname]);

  const contents = (
    <>
      <Col span={24}>
        <PopularItems loadData="popularCategories" />
      </Col>
      <Col span={24}>
        <PopularItems loadData="popularPosts" />
      </Col>
      {useBreakPoints("md", <User />, null)}
    </>
  );

  return (
    <div style={{ marginLeft: 10 }}>
      <Title size={35} textAlign="center">
        Pencil Writer
      </Title>
      {useBreakPoints("md", contents, <Affix>{contents}</Affix>)}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categoryData: selectCategoriesList,
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContents);
