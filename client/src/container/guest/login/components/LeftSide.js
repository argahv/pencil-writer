import React from "react";
import {
  Title,
  Paragraph,
  GoogleButton,
  Card,
  FacebookButton,
} from "../../../components";
import { Link, useLocation } from "@reach/router";

const LeftSide = () => {
  return (
    <Card
      style={{
        margin: "auto",
        position: "relative",
        top: "3rem",
      }}
    >
      <Title size={60} textAlign="center">
        Pencil Writer
        <span>
          {" "}
          <Paragraph size={30} color="white">
            Write what you feel...
          </Paragraph>
        </span>
      </Title>

      <GoogleButton />
      <br />
      <FacebookButton />
      <br />
      <br />
      <br />
      <Paragraph textAlign="center">
        <Link to="/explore">Or Go back to explore..</Link>{" "}
      </Paragraph>
    </Card>
  );
};

export default LeftSide;
