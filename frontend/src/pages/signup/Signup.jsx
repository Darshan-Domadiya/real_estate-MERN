import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required("* Username is required!"),
    email: yup
      .string()
      .required("* Email is required!")
      .email("Invalid email!"),
    password: yup
      .string()
      .required("* Password is required!")
      .min(6, "Password should be length of 6!"),
  });

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/user/register", {
        username: values?.username,
        email: values?.email,
        password: values?.password,
      });
      if (response.status === 200) {
        console.log("User created!", response);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("ERROR :", error);
    }
  };

  return (
    <>
      <Container className="mt-5">
        <p className="fs-1 fw-semibold text-center">Sign Up</p>
        <Row className="d-flex align-items-center justify-content-center mt-4">
          <div className="w-50">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ touched, errors, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder=" Username"
                      className="p-2 custom-input"
                      onChange={handleChange}
                      name="username"
                    />
                    {errors.username && touched.username ? (
                      <div className="mx-1 error-message">
                        {errors.username}
                      </div>
                    ) : (
                      ""
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="p-2 custom-input"
                      onChange={handleChange}
                      name="email"
                    />
                    {errors.email && touched.email ? (
                      <div className="mx-1 error-message">{errors.email}</div>
                    ) : (
                      ""
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      autoComplete="false"
                      className="p-2 custom-input"
                      onChange={handleChange}
                      name="password"
                    />
                    {errors.password && touched.password ? (
                      <div className="mx-1 error-message">
                        {errors.password}
                      </div>
                    ) : (
                      ""
                    )}
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="mt-2 bg-dark border-0 p-2 w-100 fw-bold"
                  >
                    {isLoading ? "Loading..." : "Sign In"}
                  </Button>
                  <Button className="bg-danger mt-3 border-0 p-2 w-100 fw-bold">
                    Continue with Google
                  </Button>
                </Form>
              )}
            </Formik>
            <p className="mt-1">
              Have an account?{" "}
              <span
                className="fw-bold signup-text"
                onClick={() => navigate("/signin")}
              >
                Sign In
              </span>
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
