import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "./signin.scss";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className="mt-5">
        <p className="fs-1 fw-semibold text-center">Sign In</p>
        <Row className="d-flex align-items-center justify-content-center mt-4">
          <div className="w-50">
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="p-2 custom-input"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="p-2 custom-input"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="mt-2 bg-dark border-0 p-2 w-100 fw-bold"
              >
                Sign In
              </Button>
              <Button className="bg-danger mt-3 border-0 p-2 w-100 fw-bold">
                Continue with Google
              </Button>
            </Form>
            <p className="mt-1">
              Don't have an account?{" "}
              <span
                className="fw-bold signup-text"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default SignIn;
