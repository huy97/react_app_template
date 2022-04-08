import { Button, Card, Form, Input } from "antd";
import React from "react";
import styled from "styled-components";

interface IProps {
  onFinish: any;
}

export default function LoginForm({ onFinish }: IProps) {
  return (
    <FormContainer>
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
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Required field",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Required field",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Button htmlType="submit" type="primary" block>
            Submit
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
`;

const FormContent = styled(Card)`
  max-width: 90%;
  width: 350px;
`;
