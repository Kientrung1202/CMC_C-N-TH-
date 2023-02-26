import { Form, Input, Divider, Button } from "antd";
import "../../styles/Modals/login-form.css";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="login-form">
      <p
        className="medium-bold-text huge-text"
        style={{
          color: "var(--green)",
          paddingTop: "60px",
          paddingBottom: "10px",
        }}
      >
        Đăng nhập
      </p>
      <div
        style={{
          width: "95px",
          height: "4px",
          backgroundColor: "var(--green)",
          margin: "0 auto 82px auto",
        }}
      ></div>
      <Form name="pw" className="usernamePw">
        <Form.Item
          label={<img src="./assets/user-green.png" alt="" />}
          name="username"
        >
          <Input autoFocus placeholder="Tên đăng nhập" type="text" />
        </Form.Item>
        <Form.Item
          label={<img src="./assets/password-green.png" alt="" />}
          name="password"
        >
          <Input type="password" placeholder="Mật khẩu"></Input>
        </Form.Item>
        <Divider></Divider>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Link to={"/"} className="medium-bold-text big-text forgot">
            Quên mật khẩu
          </Link>
        </div>
        <Button className="medium-bold-text submit-btn">Đăng nhập</Button>
      </Form>
      <p
        className="medium-bold-text big-text"
        style={{ color: "var(--dark-green)" }}
      >
        Hoặc đăng nhập bằng
      </p>
      <div className="other-login">
        <Button className="btn-other-login">
          <img src="./assets/logos_facebook.png" alt="" />
        </Button>
        <Button className="btn-other-login">
          <img src="./assets/logos_google-gmail.png" alt="" />
        </Button>
      </div>
      <Link
        to={"/"}
        className="medium-bold-text submit-btn"
        style={{
          color: "var(--green)",
          paddingBottom: "35px",
          display: "block",
        }}
      >
        Đăng ký
      </Link>
    </div>
  );
}
