import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <>
      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand to="view">
            <Link className="link" to="view">
              My Events App
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="link" to="view">
              View Events
            </Link>
            <Link className="link" to="add">
              Add Events
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default MyNav;
