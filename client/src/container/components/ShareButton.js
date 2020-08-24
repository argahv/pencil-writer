import React from "react";
import { Col, Row } from "antd";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  ViberShareButton,
  ViberIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";
import { useLocation } from "@reach/router";
import { Paragraph } from "./Animation";

const ShareButton = () => {
  const location = useLocation();
  const { href } = location;
  return (
    <>
      <Paragraph color="grey" size={25}>
        Share
      </Paragraph>
      <Row gutter={[8, 8]}>
        <Col lg={1} sm={6} xs={6}>
          <FacebookShareButton
            title="Just Write..."
            hashtags={["justwrite"]}
            url={href}
          >
            <FacebookIcon size={30} />
          </FacebookShareButton>
        </Col>
        <Col lg={1} sm={6} xs={6}>
          <TwitterShareButton
            title="Just Write..."
            hashtags={["justwrite"]}
            url={href}
          >
            <TwitterIcon size={30} />
          </TwitterShareButton>
        </Col>
        <Col lg={1} sm={6} xs={6}>
          <WhatsappShareButton
            title="Just Write..."
            hashtags={["justwrite"]}
            url={href}
          >
            <WhatsappIcon size={30} />
          </WhatsappShareButton>
        </Col>
        <Col lg={1} sm={6} xs={6}>
          <TelegramShareButton
            title="Just Write..."
            hashtags={["justwrite"]}
            url={href}
          >
            <TelegramIcon size={30} />
          </TelegramShareButton>
        </Col>
        <Col lg={1} sm={6} xs={6}>
          <ViberShareButton
            title="Just Write..."
            hashtags={["justwrite"]}
            url={href}
          >
            <ViberIcon size={30} />
          </ViberShareButton>
        </Col>
        <Col lg={1} sm={6} xs={6}>
          <FacebookMessengerShareButton
            appId={String(process.env.REACT_APP_FACEBOOK_APP_ID)}
            title="Just Write..."
            hashtags={["justwrite"]}
            url={href}
          >
            <FacebookMessengerIcon size={30} />
          </FacebookMessengerShareButton>
        </Col>
      </Row>
    </>
  );
};

export default ShareButton;
