import React, { useState } from "react";
import { Layout, Affix } from "antd";
import { useLocation } from "@reach/router";
import { Card, HelmetContainer } from "../../container/components";
import Navbar from "../navbar/Navbar";
import { SidebarContents, Footer } from "../../container/public";
import BreadCrumbs from "../../container/components/BreadCrumbs";
import { routes } from "../../routes";

const { Sider, Header, Content } = Layout;

const SideBar = ({ children, background, ...props }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const [broken, setBroken] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const onBreakpoint = (broken) => {
    setBroken(broken);
  };

  return (
    <>
      <HelmetContainer
        title={routes[location.pathname]}
        description={routes[location.pathname]}
      />
      <Sider
        breakpoint={"lg"}
        className="sider-class"
        collapsedWidth="0"
        onBreakpoint={onBreakpoint}
        width={broken ? "90%" : "15%"}
        collapsible={window.innerWidth < 460}
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <SidebarContents />
      </Sider>
      <Layout
        // style={{ opacity: collapsed ? "100%" : "5%" }}
        className="site-layout"
      >
        <Affix>
          <Header
            style={{ boxShadow: "0 -2px 10px rgba(0, 0, 0, 1)", background }}
            className="site-layout-background"
            style={{ padding: 0 }}
          >
            <Navbar />
          </Header>
        </Affix>
        <Content style={{ margin: "1rem" }}>
          <Card hoverable={false} className="layout-card">
            <BreadCrumbs />
            {children}
          </Card>
        </Content>
        <Layout.Footer style={{ textAlign: "center" }}>
          <Footer />
        </Layout.Footer>
      </Layout>
    </>
  );
};
export default SideBar;
