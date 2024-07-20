import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="me-lg-5 d-flex align-items-center">
          <img className="logo" src={logo} alt="logo" />
          <span className="ms-2 company-name">Hou$e of C@rds</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#properties-section">Marketplace</Nav.Link>
            <Nav.Link href="#about-section" className="px-lg-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#developers-section">Developers</Nav.Link>
            <Nav.Link href="#join-section" className="px-lg-3">
              Join
            </Nav.Link>
            <Nav.Link href="#subscribe-section" className="px-lg-3">
              Subscribe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>
          <i className="fa-regular fa-heart"></i>
          <Button
            variant="primary"
            className="btn-primary d-none d-lg-inline-block"
          >
            Connect Wallet
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;

