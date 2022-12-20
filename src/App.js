import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import EventCard from "./EventCard";
import InputForm from "./InputForm";
import MyNav from "./Navbar";
import { ApiClient } from "./apiClient";

// initialise properties of event card

function App() {
  const [events, changeEvents] = useState([]);
  const client = new ApiClient();

  // error message

  const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return true;
    } else {
      return false;
    }
  };

  const listEvents = async () => {
    let res = await axios.get("http://localhost:3001/events/");

    let success = checkStatus(res);
    if (!success) {
      alert("Error connecting - please try again");
      return;
    }

    changeEvents(res.data);
  };

  // runs when page renders for the first time

  useEffect(() => {
    listEvents();
  }, []);

  const makeEvents = () => {
    return events.map((event) => {
      return <EventCard postToDisplay={event} />;
    });
  };

  //print event card

  return (
    <Container>
      <MyNav />
      <Routes>
        <Route
          path="/view"
          index
          element={
            <Container>
              <Row>{makeEvents()}</Row>
            </Container>
          }
        />
        <Route
          path="/add"
          element={<InputForm client={client} listEvents={listEvents} />}
        />
      </Routes>
    </Container>
  );
}

export default App;
