import { Button, Card, Form, Input } from "antd";
import React from "react";
import styled from "styled-components";

interface IProps {
  loading?: boolean;
  onFinish: any;
}

export default function LoginForm({ onFinish, loading }: IProps) {
  return (
    <FormContainer>
      <h1>B2B Admin Portal</h1>
      <FormContent>
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            username: "hungnv3",
            password: "pass12345",
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input required field",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input required field",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Button loading={loading} htmlType="submit" type="primary" block>
            Sign in
          </Button>
        </Form>
      </FormContent>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: bold;
  }
`;

const FormContent = styled(Card)`
  border: 0;
  max-width: 90%;
  width: 400px;
`;
