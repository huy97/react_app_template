import { Button, Menu } from "antd";
import { logout, selectUserSelector } from "containers/Auth/authSlice";
import { useMemo, useState } from "react";
import {
  RiGroupLine,
  RiHome3Line,
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiUserLine,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import {
  StyledContent,
  StyledHeader,
  StyledLayout,
  StyledSider,
} from "./style";

interface IProps {
  children?: any;
}

const Layout = (props: IProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const user = useSelector(selectUserSelector);
  const dispatch = useDispatch();
  const location = useLocation();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const openKeys = useMemo(() => {
    const list = location.pathname.split("/").filter(Boolean);

    return list.map((item, index) => `${item}-submenu`);
  }, [location.pathname]);

  return (
    <StyledLayout>
      <StyledSider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          defaultOpenKeys={openKeys}
        >
          <Menu.Item key="/" icon={<RiHome3Line size={18} />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.SubMenu
            key="users-submenu"
            icon={<RiUserLine size={18} />}
            title="Users"
          >
            <Menu.Item key="/users" icon={<RiUserLine size={18} />}>
              <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item key="/users/groups" icon={<RiGroupLine size={18} />}>
              <Link to="/users/groups">Groups</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </StyledSider>
      <StyledLayout>
        <StyledHeader style={{ padding: 0 }}>
          <Button
            type="link"
            onClick={toggle}
            icon={
              collapsed ? (
                <RiMenuUnfoldLine size={24} />
              ) : (
                <RiMenuFoldLine size={24} />
              )
            }
          />
          <div className="flex flex-1 justify-end px-5">
            <span>
              Hi, <b>{user?.username}</b> -{" "}
              <a href="#" onClick={() => dispatch(logout())}>
                Logout
              </a>
            </span>
          </div>
        </StyledHeader>
        <StyledContent>{props.children}</StyledContent>
      </StyledLayout>
    </StyledLayout>
  );
};

export default Layout;
