import { Col, Container, Row } from "reactstrap";
import Base from "../Components/Base";
import CategorySideMenu from "../Components/CategorySideMenu";
import NewFeed from "../Components/newFeed";

const Home = () => {
    return (
      <Base>
        <Container className="mt-3">
          <Row>
            {/* medium size 2 */}
            <Col md={2} className="pt-5">
              <CategorySideMenu />
            </Col>
            <Col md={10}>
              <NewFeed />
            </Col>
          </Row>
        </Container>
      </Base>
    );
  };
  
  export default Home;
