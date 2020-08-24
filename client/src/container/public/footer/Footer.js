import React from "react";
import { Row, Col } from "antd";
import { Paragraph, Card, LinkedHeader, ShareButton } from "../../components";
import { footerContents } from "./footerContents";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  InstapaperIcon,
  TwitterIcon,
  InstapaperShareButton,
} from "react-share";

const Footer = () => {
  const footerContentsRender = () => {
    return footerContents.map((contents) => {
      return (
        <Col key={`${contents.header}-footer`} lg={8} sm={12} xs={12} md={8}>
          <Card
            style={{
              minHeight: 210,
              maxHeight: 300,
            }}
            hoverable={false}
          >
            <Paragraph size={20} color="grey" fontWeight="bold">
              {contents.header}
            </Paragraph>
            {contents.list.map((list) => {
              return (
                <LinkedHeader
                  textAlign="center"
                  key={`${list.title}-footer-${contents.header}`}
                  size={15}
                  to={list.link}
                >
                  {list.title}
                </LinkedHeader>
              );
            })}
          </Card>
        </Col>
      );
    });
  };

  return (
    <div>
      <Col span={24}>
        <Paragraph textAlign="center" size={30} color="grey">
          Pencil Writer
        </Paragraph>
      </Col>
      <Row gutter={[8, 8]}>{footerContentsRender()}</Row>
      <Row gutter={[8, 8]}>
        <Col
          // style={{ position: "relative", top: " -61px" }}
          lg={8}
          sm={12}
          xs={12}
          md={8}
        >
          <Card hoverable={false}>
            <Paragraph textAlign="center" size={30} color="grey">
              Follow
            </Paragraph>
            <FacebookShareButton>
              <FacebookIcon size={20} />
            </FacebookShareButton>
            <TwitterShareButton>
              <TwitterIcon size={20} />
            </TwitterShareButton>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Paragraph textAlign="center" color="grey" size={15}>
            Pencil Writer - 2020
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
