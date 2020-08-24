import React from "react";
import { Helmet } from "react-helmet";

const HelmetContainer = ({ title = "", description = "" }) => {
  return (
    <Helmet>
      <title>{title} | Pencil Writer</title>
      <meta name="description" content={`${description} | Pencil Writer`} />
    </Helmet>
  );
};

export default HelmetContainer;
