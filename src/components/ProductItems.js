import { useContext } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import CartContext from "./store/cart-context";

const ProductItems = (props) => {
  
  const cartCtx = useContext(CartContext)

  return (
    <Row className="d-flex justify-content-center">
      {props.productsArr.map((product,index) => {

        const newProduct = {id: `${index+1}`, ...product,  quantity: 1}

        return (
          <Col key={newProduct.id} md="5" className="d-flex justify-content-center my-2">
            <Card className="bg-image" style={{ width: '18rem', border: 0 }}>
              <Card.Header className="text-center fs-5 fw-medium">{newProduct.title}</Card.Header>
              <div style={{ overflow: "hidden" }}>
                <Card.Img style={{ transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.5)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  variant="top" className="rounded-0 " src={newProduct.imageUrl} />
              </div>
              <Card.Body className="d-flex justify-content-between">
                <p>Price: ${newProduct.price}</p>
                <Button onClick={cartCtx.addToCart.bind(null,newProduct)} variant="primary">ADD TO CART</Button>
              </Card.Body>
            </Card>
          </Col>)
      })}
    </Row>
  )
}

export default ProductItems;