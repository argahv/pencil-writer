import React, { useState, useEffect } from "react";
import { Row, Col, Popover } from "antd";
import { PrimaryButton } from "../../../../components";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions";
import { createStructuredSelector } from "reselect";
import { selectQuery } from "../selectors";
import { motion } from "framer-motion";
import FilterComponents from "./FilterComponents";

const Filter = ({ query, ...props }) => {
  const [showFilters, setShowFilters] = useState(false);

  let filtered = query.search.searchField.length > 0;

  const resetBrowse = () => {
    props.resetQuery();
  };

  return (
    <Row gutter={[12, 12]}>
      <Col span={12}>
        {filtered && (
          <PrimaryButton curved color="red" width={80} onClick={resetBrowse}>
            Reset
          </PrimaryButton>
        )}
      </Col>
      <Col span={12}>
        <PrimaryButton
          curved
          width={100}
          onClick={() => setShowFilters(!showFilters)}
        >
          <Popover
            trigger="click"
            placement="bottomRight"
            content={<FilterComponents />}
          >
            Browse
          </Popover>
        </PrimaryButton>
      </Col>
    </Row>
  );
};

const mapStateToProps = createStructuredSelector({
  query: selectQuery,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
