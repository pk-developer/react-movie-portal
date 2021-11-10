import { React } from "shared/shared-import";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { AuthService } from "core/auth/auth.interceptor";
import "./login.style.scss";
import { useNavigate } from "react-router-dom";
import { User } from "core/model/interfaces";
import Toast  from "core/services/toaster.services";
import { INVALID_USER, LOGIN_SUCCESS, SERVER_ERROR } from "core/Strings";
interface LoginComponentProps {}

const LoginComponent = (props: LoginComponentProps) => {
  const authService = new AuthService();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const onLogin = (values: any) => {
    setIsSubmitting(true);
    authService.loginAndSetToken(values).then(
      (res: any) => {
        const userNames: User[] = res.data.map((elem: User) => elem.username);
        if (userNames.includes(values.username)) {
          Toast.success(LOGIN_SUCCESS);
          navigate("/movies");
        } else {
          Toast.error(INVALID_USER);
        }
        setIsSubmitting(false);
      },
      (error: any) => {
        setIsSubmitting(false);
        Toast.error(SERVER_ERROR);
      }
    );
  };
  return (
    <div className="login_wrapper">
      <Card className="login_box">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onLogin}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input className="form-control" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="password" className="form-control" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox> Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              className="btn btn-primary"
              disabled={isSubmitting}
              htmlType="submit"
            >
              {isSubmitting ? "Authenticating..." : "Login"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginComponent;
