import { useContext } from "react";
import { Link } from "react-router-dom";
import {Card, Button } from "react-bootstrap";
import CartContext from "./store/cart-context";

const ProductItems = (props) => {
  
  const cartCtx = useContext(CartContext)

  return (
    <div className='container'>
      <div className="row d-flex justify-content-center">
        {props.productsArr.map((product, index) => {
          const newProduct = { id: `${index + 1}`, ...product, quantity: 1 };

          return (
            <div key={product.id} className="col-md-5 d-flex justify-content-center">
              <Card className="container text-center" style={{ width: '18rem', border: 0 }}>
                <Card.Header style={{ fontSize: "1.25rem", textAlign: "center", fontWeight: "bold" }}>
                  <Link to={`/store/${newProduct.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {product.title}
                  </Link>
                </Card.Header>
                <div style={{ overflow: "hidden" }}>
                  <Link to={`/store/${newProduct.id}`}>
                    <Card.Img alt={product.name}
                      style={{ transition: 'transform 0.5s ease' }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.5)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)' }
                      variant="top" className="rounded-0" src={product.imageUrl} />
                  </Link>
                </div>
                <Card.Body className='d-flex justify-content-between'>
                  <p>₹{product.price}</p>
                  <Button variant="primary" onClick={cartCtx.addToCart.bind(null, newProduct)}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductItems;