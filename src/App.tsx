import { Card } from "antd";
import Layout from "components/Layout";
import { logout, selectUserSelector } from "containers/Auth/authSlice";
import withAuth from "helpers/withAuth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import service from "services";

function App() {
  const user = useSelector(selectUserSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    service.get(
      "https://unasfrsfck.execute-api.ap-southeast-1.amazonaws.com/dev/hello"
    );
  }, []);

  return (
    <Layout>
      <Card>Hello World</Card>
    </Layout>
  );
}

export default withAuth(App);
