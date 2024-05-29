import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import login from "../services/users";
import Toast from "../components/Alert";
import { setToken } from "../utils/token";

const Login = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(payload);
      if (data?.data) {
        setToken(data.data);
        navigate("/");
      }
    } catch (error) {
      setError(error);
    } finally {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="container h-100 w-100 justify-content-center align-items-center">
      <Card className="p-5">
        <h1>Login</h1>
        {error && <Toast msg={error} />}
        <Form onSubmit={(e) => handleLogin(e)}>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  setPayload((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
                required
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setPayload((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">submit</Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Link to={"/register"}>Register</Link>
            </Col>
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
