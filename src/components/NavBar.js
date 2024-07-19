import { useContext } from "react";
import CartContext from "./store/cart-context";
import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = (props) => {

  const location = useLocation()

  const cartCtx = useContext(CartContext)
  const totalItems = cartCtx.cartItems.reduce((curNumber, item) => curNumber + item.quantity,
    0)

  return (
    <Navbar bg="black" data-bs-theme="dark" className="mb-2 " fixed="top">
      <Container fluid>
        <Nav className="mx-auto">
          <Nav.Link as={NavLink} to={'/'} className="mx-3">HOME</Nav.Link>
          <Nav.Link as={NavLink} to={'/store'} className="mx-3">STORE</Nav.Link>
          <Nav.Link as={NavLink} to={'/about'} className="mx-3">ABOUT</Nav.Link>
        </Nav>
        {location.pathname==='/store' &&
          <Button onClick={props.onShow} variant="outline-primary text-light border-2 rounded-3" className="position-relative ">Cart
            <Badge className="position-absolute top-0 start-100 translate-middle">{totalItems}</Badge>
          </Button>
        }
      </Container>
    </Navbar>
  )
}

export default NavBar