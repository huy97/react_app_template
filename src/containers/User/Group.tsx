import { Breadcrumb, Button, Card, Form, Input, Modal, Table } from "antd";
import Layout from "components/Layout";
import withAuth from "helpers/withAuth";
import React from "react";

const columns = [
  {
    title: "Permission",
  },
  {
    title: "Read",
  },
  {
    title: "Write",
  },
];

function Group() {
  const [visible, setVisible] = React.useState(false);
  return (
    <Layout>
      <Breadcrumb style={{ marginBottom: 10 }} separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/users">Users</Breadcrumb.Item>
        <Breadcrumb.Item>Groups</Breadcrumb.Item>
      </Breadcrumb>
      <Card
        extra={
          <Button type="primary" onClick={() => setVisible(true)}>
            Add Group
          </Button>
        }
      ></Card>
      <Modal
        visible={visible}
        title="Add Group"
        okText="Save"
        onCancel={() => setVisible(false)}
      >
        <Form layout="vertical">
          <Form.Item label="Group Name">
            <Input />
          </Form.Item>
          <Form.Item label="Group Description">
            <Input />
          </Form.Item>
          <Table columns={columns} />
        </Form>
      </Modal>
    </Layout>
  );
}

export default withAuth(Group);
