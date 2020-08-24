import React from "react";
import { Col, Row } from "antd";
import LeftSide from "./components/LeftSide";
import InputForm from "./components/InputForm";

const Login = (props) => {
  return (
    <div style={{ padding: "2rem" }}>
      <Row gutter={[16, 16]}>
        <Col lg={12} sm={24} xs={24}>
          <LeftSide />
        </Col>
        <Col lg={12} sm={24} xs={24}>
          <InputForm />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
