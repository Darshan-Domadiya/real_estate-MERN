import React from "react";
import {
  Button,
  Form,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  InputGroup,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./header.scss";

const Header = () => {
  return (
    <Container fluid className="headerBackground  shadow-sm mx-auto">
      <Row className="p-4 d-flex align-items-center justify-content-center">
        <Col className="d-flex justify-content-around">
          <Navbar.Brand href="/" className="fs-4">
            <span className="fw-bold logo-initial">Avenue</span>
            <span className="logo-end fw-bold">Realtors</span>
          </Navbar.Brand>
        </Col>
        <Col className="d-flex  justify-content-center ">
          <InputGroup className="" style={{ maxWidth: "300px" }}>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-icon"
              className="searchbar"
            />
            <InputGroup.Text id="search-icon">
              <FaSearch />
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col className="d-flex justify-content-center  gap-5">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/signin">SignIn</Nav.Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
