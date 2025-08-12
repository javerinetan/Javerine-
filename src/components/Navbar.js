import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { FaAward, FaQuoteRight } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // Theme: dark/light with persistence
  const getInitialDark = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  };
  const [isDark, setIsDark] = useState(getInitialDark);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    function onScroll() {
      updateNavbar(window.scrollY >= 20);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex" onClick={() => updateExpanded(false)}>
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/compeitions"
                onClick={() => updateExpanded(false)}
              >
                <FaAward style={{ marginBottom: "2px" }} /> Achievements
              </Nav.Link>
            </Nav.Item>

            {/* Renamed dropdown with two items */}
            <NavDropdown
              id="nav-credentials"
              align="end"
              title={
                <>
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Credentials
                </>
              }
            >
              <NavDropdown.Item
                as={Link}
                to="/testimonials"
                onClick={() => updateExpanded(false)}
              >
                <FaQuoteRight style={{ marginBottom: "2px" }} /> Testimonials
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </NavDropdown.Item>
            </NavDropdown>

            {/* Theme switch */}
            <Nav.Item className="ms-md-3 d-flex align-items-center">
              <button
                className="theme-toggle"
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                onClick={() => setIsDark((d) => !d)}
              >
                {isDark ? <BsSun /> : <BsMoon />}
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;