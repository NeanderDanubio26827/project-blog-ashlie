import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "../pages/Home";
import About from "../pages/About";
import "./Navbar.modules.css";
import CardsAsh from "../pages/Cards";
import Posts from "../pages/Posts";
import Cards from "../pages/Cards";
import PostForm from "../pages/PostForm";

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-pink">
      {" "}
      {/* Adicione a classe bg-pink aqui */}
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-link" element={<Home />}>
              Principal
            </Link>
            <Link to="/About" className="nav-link" element={<About />}>
              Sobre mim
            </Link>
            <NavDropdown title="Posts" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Posts</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <Link to="/Posts" className="nav-link" element={<Posts />}>
                  Posts
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                <Link to="/PostForm" className="nav-link" element={<PostForm />}>
                  Novo post
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/Cards" className="nav-link" element={<Cards />}>
              Cards
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busca"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Busca</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
