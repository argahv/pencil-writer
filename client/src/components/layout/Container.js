import { Layout } from "antd";
import React from "react";
import { connect } from "react-redux";
import { useLocation, LocationProvider, Location } from "@reach/router";
import { createStructuredSelector } from "reselect";
import { selectUser, selectIsLoggedIn } from "../../container/selectors";
import SideBar from "./SideBar";

const { Content } = Layout;

const Container = ({ children, isLoggedIn, ...props }) => {
  const noSidebar = ["/login"];
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Location>
        {({ location }) => {
          if (location.pathname === "/login") {
            return <Content location={location}>{children}</Content>;
          }
          return <SideBar location={location}>{children}</SideBar>;
        }}
      </Location>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  isLoggedIn: selectIsLoggedIn,
});

export default connect(mapStateToProps, null)(Container);
