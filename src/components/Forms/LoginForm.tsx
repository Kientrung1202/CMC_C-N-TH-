import { Form, Input } from "antd";

export default function LoginForm() {
  return (
    <Form name="login">
      <Form.Item label="username" name="username">
        <Input></Input>
      </Form.Item>
      <Form.Item label="password" name="password">
        <Input type="password"></Input>
      </Form.Item>
    </Form>
  );
}
