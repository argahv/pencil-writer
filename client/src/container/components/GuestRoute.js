import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUser } from "../selectors";

// Route logged-in-user cannot access
const GuestRoute = ({ user, container: Container, ...restProps }) => {
  useEffect(() => {
    if (user) {
      if (restProps.location.state && restProps.location.state.from) {
        restProps.navigate(restProps.location.state.from, { replace: true });
      } else {
        restProps.navigate("/explore", { replace: true });
      }
    }
  }, [user]);
  return <Container {...restProps} />;
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(GuestRoute);
