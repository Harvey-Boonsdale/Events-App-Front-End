import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./App.css";
import { Link } from "react-router-dom";

function EventCard(props) {
  //function to delete on click

  const deleteHandler = async (e) => {
    props.client.deleteEvent(props.postToDisplay._id);
    props.listEvents();
  };

  return (
    <div className="eventCard">
      <Card bg="light" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.postToDisplay.name}</Card.Title>
          <Card.Text>Location: {props.postToDisplay.location} </Card.Text>
          <Card.Text>Date: {props.postToDisplay.date}</Card.Text>
          <Card.Text>Time: {props.postToDisplay.time}</Card.Text>
          <Card.Text>{props.postToDisplay.info}</Card.Text>
          <Link className="link" to={`/edit/${props.postToDisplay._id}`}>
            Edit Event
          </Link>
          <Button variant="danger" onClick={() => deleteHandler()}>
            Delete Event
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EventCard;
