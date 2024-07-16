import { Navbar, Nav, Container } from "react-bootstrap";
import CartBtn from "./CartBtn";

const NavBar = (props) => {
    return (
      <Navbar bg="black" data-bs-theme="dark" className="mb-2 " fixed="top">
      <Container fluid>
        <Nav className="mx-auto">
          <Nav.Link href="#home" className="mx-3">HOME</Nav.Link>
          <Nav.Link href="#store" className="mx-3">STORE</Nav.Link>
          <Nav.Link href="#about" className="mx-3">ABOUT</Nav.Link>
        </Nav>
        <CartBtn onShow={props.onShow}/>
      </Container>
    </Navbar>
    
    )
}

export default NavBar