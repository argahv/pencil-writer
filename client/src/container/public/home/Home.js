import React from "react";
import { Row, Col } from "antd";
import { Head, Title, LinkedHeader, Paragraph, Card } from "../../components";

const Home = () => {
  return (
    <div>
      <Title size={60} textAlign="center">
        Pencil Writer
      </Title>
      <Paragraph textAlign="center" size={30} color="white">
        Write what you feel...
      </Paragraph>
      <Row gutter={[18, 18]}>
        <Col lg={12} sm={24} xs={24}>
          <Card>
            <Head size={35} color="#4095c2" textAlign="center">
              Explore other's creativity
            </Head>
            <LinkedHeader size={40} textAlign="center" to="/explore">
              Explore
            </LinkedHeader>
          </Card>
        </Col>
        <Col lg={12} sm={24} xs={24}>
          <Card>
            <Head size={35} color="#5cdb95" textAlign="center">
              Show your creativity
            </Head>
            <LinkedHeader size={40} textAlign="center" to="/post/create">
              Create your own
            </LinkedHeader>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
