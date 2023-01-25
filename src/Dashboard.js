import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";
import EventCard from "./EventCard";

function Dashboard(props) {
  useEffect(() => {
    props.listEvents();
  }, []);

  const makeEvents = () => {
    return props.events.map((event) => {
      return (
        <EventCard
          postToDisplay={event}
          client={props.client}
          listEvents={props.listEvents}
        />
      );
    });
  };

  //print event card

  return (
    <div>
      <Container>
        <Row>{makeEvents()}</Row>
      </Container>
    </div>
  );
}

export default Dashboard;
