import { Container, Row, Col, Button } from "react-bootstrap";
import ProductItems from "./ProductItems";


const Products = (props) => {
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column" fluid>
                <ProductItems productsArr={props.productsArr}/>
                <Button onClick={props.onShow} variant="secondary" className=" my-5"><a href="#cart" style={{textDecoration: "none", color: "white"}}>See the cart</a></Button>
        </Container>
    )
}

export default Products;