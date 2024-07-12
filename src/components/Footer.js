import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-info text-light">
            <Container fluid>
                <Row className="my-auto" >
                    <Col xs={6}>
                        <h2 style={{fontFamily: "'Montserrat', sans-serif", fontSize: "60px"}}
                        className="text-white ms-5">The Generics</h2>
                    </Col>
                    <Col xs={2} className="position-relative"><a className="position-absolute top-50 start-50 translate-middle" href="https://www.youtube.com/"><Image className="" style={{width: "80px"}} src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="youtube"/></a></Col>

                    <Col xs={2} className="position-relative"><a className="position-absolute top-50 start-50 translate-middle" href="https://open.spotify.com/"><Image style={{width: "50px", mixBlendMode: "multiply"}} src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png" alt="spotify"/></a></Col>

                    <Col xs={2} className="position-relative"><a className="position-absolute top-50 start-50 translate-middle" href="https://www.facebook.com/"><Image style={{width: "50px", mixBlendMode: "multiply"}} src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png" alt="facebook"/></a></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;