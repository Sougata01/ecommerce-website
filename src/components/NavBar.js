import { Navbar, Nav, Container } from "react-bootstrap";
import Cart from "./Cart";

const NavBar = () => {
    return (
        <Navbar bg="black" data-bs-theme="dark" className="mb-2" fixed="top">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="mx-3">HOME</Nav.Link>
            <Nav.Link href="#store" className="mx-3">STORE</Nav.Link>
            <Nav.Link href="#about" className="mx-3">ABOUT</Nav.Link>
          </Nav>
          <Cart />
        </Container>
      </Navbar>
    )
}

export default NavBar