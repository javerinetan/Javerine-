import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";
import { applyTheme, preferredTheme } from "../theme";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const [isDark, setIsDark] = useState(() => preferredTheme() === "dark");

  useEffect(() => {
    applyTheme(isDark ? "dark" : "light");
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
          <span className="brand-mark" aria-label="Javerine Tan home">JAE</span>
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
              <Nav.Link as={NavLink} to="/" end onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/compeitions"
                onClick={() => updateExpanded(false)}
              >
                <FaAward style={{ marginBottom: "2px" }} /> Achievements
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/credentials"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Credentials
              </Nav.Link>
            </Nav.Item>

            {/* Theme switch */}
            <Nav.Item className="ms-md-3 d-flex align-items-center">
              <button
                type="button"
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
