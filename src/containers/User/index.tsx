import Layout from "components/Layout";
import withAuth from "helpers/withAuth";
import React from "react";

function User() {
  return <Layout>User</Layout>;
}

export default withAuth(User);
