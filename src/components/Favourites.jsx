import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector(state => state.favourite.list);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={10} className="d-flex ">
          <h1 className="display-4 me-auto">Favourites</h1>
          <Button onClick={() => navigate("/")}>
            go to Home
          </Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <ListGroup>
            {favourites.length > 0 ? (
              favourites.map((fav, i) => (
                <ListGroup.Item key={i}>
                  <X
                    color="red"
                    className="me-2"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITE",
                        payload: fav
                      })
                    }
                  />
                  <Link to={"/" + fav}>{fav}</Link>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>
                No favourites saved <Link to="/">Homepage</Link>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;