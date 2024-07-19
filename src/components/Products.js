import { Container, Button } from "react-bootstrap";
import ProductItems from "./ProductItems";


const Products = (props) => {

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column" fluid>
            <ProductItems productsArr={props.productsArr} />
            <Button onClick={props.onShow} variant="secondary" className=" my-5">
                See the cart
            </Button>
        </Container>
    )
}

export default Products;