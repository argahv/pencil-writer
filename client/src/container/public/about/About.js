import React from "react";
import { Col } from "antd";
import { Head, Paragraph } from "../../components";
import { aboutContent } from "./aboutContent";

const About = () => {
  return (
    <div>
      <Col span={24}>
        <Head textAlign="center" color="rgb(242, 56, 224)">
          About
        </Head>
      </Col>
      <Col
        style={{
          fontSize: 20,
          fontFamily: ["Yanone Kaffeesatz", "sans-serif"],
        }}
        dangerouslySetInnerHTML={{
          __html: aboutContent,
        }}
      />
      <Paragraph color="white" textAlign="right" size={24}>
        * - For a limited period of time.
      </Paragraph>
    </div>
  );
};

export default About;
