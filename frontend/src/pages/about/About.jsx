import React from "react";
import "./about.scss";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex align-items-center justify-content-center">
          <div className="w-75">
            <p className="fs-1 fw-bolder">About Avenue Realtors</p>
            <p className="fs-6 ">
              Avenue Realtors is a leading real estate agency that specializes
              in helping clients buy, sell, and rent properties in the most
              desirable neighborhoods. Our team of experienced agents is
              dedicated to providing exceptional service and making the buying
              and selling process as smooth as possible.
            </p>
            <p className="fs-6 ">
              Our mission is to help our clients achieve their real estate goals
              by providing expert advice, personalized service, and a deep
              understanding of the local market. Whether you are looking to buy,
              sell, or rent a property, we are here to help you every step of
              the way.
            </p>
            <p className="fs-6 ">
              Our team of agents has a wealth of experience and knowledge in the
              real estate industry, and we are committed to providing the
              highest level of service to our clients. We believe that buying or
              selling a property should be an exciting and rewarding experience,
              and we are dedicated to making that a reality for each and every
              one of our clients.
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default About;
