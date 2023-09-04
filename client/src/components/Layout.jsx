import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";

const Layout = (props) => {
  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-md-center">
        <Col xs="12" md="10" lg="8" xl="6">
          <Image
            thumbnail
            fluid
            src="trustech.png"
            width="50%"
            className="rounded mx-auto d-block"
          />
          <h1 className="mb-4 text-center">
            Trustech Tasks
          </h1>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
