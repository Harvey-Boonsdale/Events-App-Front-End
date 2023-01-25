import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import EventCard from "./EventCard";
import InputForm from "./InputForm";
import EditForm from "./EditForm";
import MyNav from "./Navbar";
// import Login from "./Login";
// import Dashboard from "./Dashboard";
import { ApiClient } from "./apiClient";

// initialise properties of event card

function App() {
  const [token, changeToken] = useState("secretString");
  const [events, changeEvents] = useState([]);
  const logoutHandler = () => {
    console.log("logging out");
  };
  const client = new ApiClient(
    () => {
      return token;
    },
    () => logoutHandler()
  );

  // error message

  const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return true;
    } else {
      return false;
    }
  };

  // Gets info from server and puts it in state

  const listEvents = async () => {
    let res = await axios.get("http://localhost:3001/events/", {
      headers: { authorization: "secretString" },
    });

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
      return (
        <EventCard
          postToDisplay={event}
          client={client}
          listEvents={listEvents}
        />
      );
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
        <Route
          path="/edit/:id"
          element={
            <EditForm events={events} client={client} listEvents={listEvents} />
          }
        />
      </Routes>
    </Container>
  );
}
// return <>{token ? <Dashboard /> : <Login />}</>;

export default App;
