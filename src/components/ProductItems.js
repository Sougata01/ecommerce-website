import { Row, Col, Card, Button } from "react-bootstrap";

const ProductItems = (props) => {
  console.log(props.productsArr)
  return (
    <Row className="d-flex justify-content-center">
      {props.productsArr.map(product => {
        return (
          <Col md="5" className="d-flex justify-content-center my-2">
            <Card className="bg-image" style={{ width: '18rem', border: 0 }}>
              <Card.Header className="text-center fs-5 fw-medium">{product.title}</Card.Header>
              <div style={{ overflow: "hidden" }}>
                <Card.Img style={{ transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.5)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  variant="top" className="rounded-0 " src={product.imageUrl} />
              </div>
              <Card.Body className="d-flex justify-content-between">
                <p>Price: ${product.price}</p>
                <Button variant="primary">ADD TO CART</Button>
              </Card.Body>
            </Card>
          </Col>)
      })}
    </Row>
  )
}

export default ProductItems;