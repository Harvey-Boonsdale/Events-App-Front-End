// import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EventCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.postToDisplay.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Location: {props.postToDisplay.location}{" "}
        </Card.Subtitle>
        <Card.Text>Date: {props.postToDisplay.info}</Card.Text>
        <Card.Text>Time: {props.postToDisplay.time}</Card.Text>
        <Card.Text>{props.postToDisplay.info}</Card.Text>
        <Card.Link href="#">Edit Event</Card.Link>
        <Card.Link href="#">Delete Event</Card.Link>
      </Card.Body>
    </Card>
  );
}

// export default TextExample;

// function EventCard(props) {
//   return (
//     <div>
//       <h2>Event Name: {props.postToDisplay.name}</h2>
//       <p>Location: {props.postToDisplay.location}</p>
//       <p>Info: {props.postToDisplay.info}</p>
//       <p>Date: {props.postToDisplay.date}</p>
//       <p>Time: {props.postToDisplay.time}</p>
//     </div>
//   );
// }

export default EventCard;
