import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Row, Col } from "antd";
import { Paragraph, Text, Card, PrimaryButton } from "../../../components";
import { selectScores } from "../selectors";
import * as mapDispatchToProps from "../actions";

const Scores = ({ scores, getUserScores }) => {
  useEffect(() => {
    getUserScores();
  }, []);

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} lg={8}>
        <Card hoverable={false} background="#eb4034">
          <Paragraph color="white" textAlign="center">
            Points
          </Paragraph>
          <Text size={50} color="white" fontWeight="bold">
            {scores.points}
          </Text>
        </Card>
      </Col>
      <Col xs={24} sm={24} lg={8}>
        <Card hoverable={false} background="rgb(64, 137, 44)">
          <Paragraph color="white" textAlign="center">
            Level
          </Paragraph>
          <Text size={50} color="white" fontWeight="bold">
            {scores.level}
          </Text>
        </Card>
      </Col>
      <Col xs={24} sm={24} lg={8}>
        <Card hoverable={false} background="#b80f0a">
          <Paragraph color="white" textAlign="center">
            Fires
          </Paragraph>
          <Text size={50} color="white" fontWeight="bold">
            {scores.fires}
          </Text>
        </Card>
      </Col>
    </Row>
  );
};

const mapStateToProps = createStructuredSelector({
  scores: selectScores,
});

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
