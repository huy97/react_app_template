import styled from "styled-components";
import { Layout } from "antd";

export const StyledLayout = styled(Layout)`
  height: 100%;
`;

export const StyledContent = styled(Layout.Content)`
  padding: 20px;
`;

export const StyledHeader = styled(Layout.Header)`
  display: flex;
  background-color: #fff;
  align-items: center;
`;

export const StyledSider = styled(Layout.Sider)`
  .logo {
    height: 54px;
    margin: 10px;
    background-color: #ccc;
  }
`;
