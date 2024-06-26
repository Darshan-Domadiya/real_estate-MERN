import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "./signin.scss";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("* Email is required!")
      .email("Invalid email!"),
    password: yup
      .string()
      .required("* Password is required!")
      .min(6, "Password should be length of 6!"),
  });

  const handleFormData = (values) => {
    console.log("values", values);
    setFormData(values);
  };

  // console.log("state variable for formik data", formData);

  return (
    <>
      <Container className="mt-5">
        <p className="fs-1 fw-semibold text-center">Sign In</p>
        <Row className="d-flex align-items-center justify-content-center mt-4">
          <div className="w-50">
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={(values) => handleFormData(values)}
            >
              {({ touched, errors, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="p-2 custom-input"
                      name="email"
                      onChange={handleChange}
                    />
                    {errors.email && touched.email ? (
                      <div className="error-message">{errors.email}</div>
                    ) : (
                      ""
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="p-2 custom-input"
                      onChange={handleChange}
                    />
                    {errors.password && touched.password ? (
                      <div className="error-message">{errors.password}</div>
                    ) : (
                      ""
                    )}
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
              )}
            </Formik>
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
