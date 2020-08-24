import React, { Component } from "react";
import { Row, Col } from "antd";
import { Paragraph, Title, Head } from "../../container/components";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "1rem" }}>
          <Title textAlign="center">Pencil Writer</Title>
          <Head textAlign="center" color="crimson" size={70}>
            Oops!!
          </Head>
          <Paragraph textAlign="center" color="white" size={40}>
            Something went wrong.
          </Paragraph>
          <br />
          <Row gutter={[12, 12]} style={{ textAlign: "center" }}>
            <Col span={12}>
              <a href="/">
                <Paragraph color="grey" size={35}>
                  Go to Home Page
                </Paragraph>
              </a>
            </Col>
            <Col span={12}>
              <a href="/explore">
                <Paragraph color="grey" size={35}>
                  Explore More Contents
                </Paragraph>
              </a>
            </Col>
          </Row>
          <br />
          <Paragraph textAlign="center" size={20} color="darkgrey">
            [ Please check your internet connection as well.]
          </Paragraph>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
