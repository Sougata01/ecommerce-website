import { Container, Row, Col, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

const cartElements = [

  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  }
]

const Cart = (props) => {

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
            {cartElements.map(cartElement => {
              return (
                <Row key={cartElement.title} className='border-bottom'>
                  <Col xs={6} className='d-flex'><img src={cartElement.imageUrl} alt={cartElement.title} style={{ width: '100px', height: '100px', margin: '10px' }} className='rounded-4' />
                    <h6 className='my-auto '>{cartElement.title}</h6>
                  </Col>
                  <Col className='my-auto' xs={2}>{cartElement.price}</Col>
                  <Col className='my-auto' xs={3}>
                    <Row>
                      <Col className='my-auto me-1' xs="4"><input type='number' value={cartElement.quantity} style={{ width: "40px" }} /></Col>
                      <Col className='my-auto' xs="6"><Button variant='danger'>REMOVE</Button></Col>
                    </Row>
                  </Col>
                </Row>
              )
            })}
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;