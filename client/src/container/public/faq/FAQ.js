import React from "react";
import { Col, Collapse, Row } from "antd";
import { Head, Card, LinkedHeader } from "../../components";
import { faqContents } from "./faqContents";

const FAQ = () => {
  return (
    <div>
      <Col span={24}>
        <Head textAlign="center" color="rgb(242, 56, 224)">
          FAQ
        </Head>
      </Col>
      <Col>
        <Collapse defaultActiveKey="0">
          {faqContents.map(({ header, text }, index) => (
            <Collapse.Panel header={header} key={index}>
              <p>{text}</p>
            </Collapse.Panel>
          ))}
        </Collapse>
      </Col>
      <br />
      <Row gutter={[8, 8]}>
        <Col lg={8} xs={24} sm={12}>
          <Card>
            <Head color="white" textAlign="center" size={15}>
              Want to read more about it?
            </Head>
            <LinkedHeader to="/aboutus" textAlign="center">
              Click here
            </LinkedHeader>
          </Card>
        </Col>
        <Col lg={8} xs={24} sm={12}>
          <Card>
            <Head color="white" textAlign="center" size={15}>
              Still have any doubt? Ask about it.
            </Head>
            <LinkedHeader textAlign="center" to="/contactus">
              Click here
            </LinkedHeader>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FAQ;
