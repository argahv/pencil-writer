import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUser } from "../selectors";
import Loader from "../../components/loader/Loader";

// Route only logged-in-user can access
const ProtectedRoute = ({
  client,
  user,
  container: Container,
  navigate,
  ...restProps
}) => {
  useEffect(() => {
    if (!user) {
      navigate("/login", {
        state: { from: restProps.location.pathname },
        replace: false,
      });
    }
  }, []);

  if (user) {
    return <Container {...restProps} />;
  }
  return <Loader />;
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(ProtectedRoute);
