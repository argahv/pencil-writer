import React from "react";
import { Row } from "antd";
import { LinkedHeader, Paragraph } from "./Animation";

const PageNotFound = () => {
  return (
    <Row style={{ padding: 20, textAlign: "center" }}>
      <Paragraph>The page is not available. </Paragraph>
      <LinkedHeader to="/explore"> Go back to explore instead.</LinkedHeader>
    </Row>
  );
};

export default PageNotFound;
