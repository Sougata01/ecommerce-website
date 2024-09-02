import { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartContext from './store/cart-context';


const Cart = (props) => {

  const cartCtx = useContext(CartContext)
  console.log('hi')

  return (
    <>
      <Offcanvas scroll="true" show={props.show} placement='end' onHide={props.onClose} style={{ width: "500px", top: "60px" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='w-100 text-center'><h2>CART</h2></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row className='border-bottom'>
              <Col xs={6}><h5>ITEM</h5></Col>
              <Col xs={2} className='me-2'><h5>PRICE</h5></Col>
              <Col xs={3} className='me-2'><h5>QUANTITY</h5></Col>
            </Row>
            {cartCtx.cartItems.map(cartElement => {
              return (
                <Row key={cartElement.id} className='border-bottom'>
                  <Col xs={6} className='d-flex'>
                    <img src={cartElement.imageUrl}
                      alt={cartElement.title}
                      style={{ width: '100px', height: '100px', margin: '10px' }}
                      className='rounded-4' />
                    <h6 className='my-auto '>{cartElement.title}</h6>
                  </Col>
                  <Col className='my-auto' xs={2}>{cartElement.price}</Col>
                  <Col className='my-auto' xs={3}>
                    <Row>
                      <Col className='my-auto me-1' xs="4">
                        <input value={cartElement.quantity}
                          style={{ width: "40px", textAlign: "center" }} />
                      </Col>
                      <Col className='my-auto' xs="6">
                        <Button variant='danger' onClick={cartCtx.removeFromCart.bind(null, cartElement)}>
                          REMOVE
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              )
            })}
            <Row className='d-flex justify-content-end mt-4'>
              <Col xs={3}><h4>Total</h4></Col>
              <Col xs={3}><p>${cartCtx.totalPrice}</p></Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;