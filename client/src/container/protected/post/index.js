import React from "react";
import { Router } from "@reach/router";
import Create from "./create/Create";
import Edit from "./edit/Edit";

const Post = () => {
  return (
    <Router>
      <Create path="create" />
      <Edit path="edit/:id" />
    </Router>
  );
};

export default Post;
