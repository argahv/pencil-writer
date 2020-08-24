import React from "react";
import Container from "./Container";

const ResponsiveContainer = ({ children }) => {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
};
export default ResponsiveContainer;
