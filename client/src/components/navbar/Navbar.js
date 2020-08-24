import React from "react";
import User from "../user/User";
import { Menu } from "antd";
import { menuList } from "./menuList";
import { LinkedHeader, useBreakPoints } from "../../container/components";

const Navbar = () => {
  return (
    <>
      <div style={{ float: window.innerWidth > 576 ? "left" : "" }}>
        <Menu
          selectable={false}
          mode="horizontal"
          style={{ background: "none" }}
        >
          {menuList.map((list) => (
            <Menu.Item key={`list-header-${list.title}`}>
              <LinkedHeader
                textAlign="left"
                size={20}
                color="grey"
                to={list.link}
              >
                {list.title}
              </LinkedHeader>
            </Menu.Item>
          ))}
        </Menu>
      </div>
      {useBreakPoints(
        "md",
        null,
        <div style={{ float: "right", width: "15%" }}>
          <User />
        </div>
      )}
    </>
  );
};

export default Navbar;
