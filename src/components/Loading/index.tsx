import React from "react";
import { Spin } from "antd";
import { FaSpinner } from "react-icons/fa";

import { StyledLoading, StyledSpinner } from "./style";

function Loading() {
  return (
    <StyledLoading>
      <StyledSpinner />
    </StyledLoading>
  );
}

export default Loading;
