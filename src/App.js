import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import InputForm from "./InputForm";
import EditForm from "./EditForm";
import MyNav from "./Navbar";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { ApiClient } from "./apiClient";

// initialise properties of event card

function App() {
  const [token, changeToken] = useState(window.localStorage.getItem("token"));
  const [events, changeEvents] = useState([]);
  const logoutHandler = () => {
    window.localStorage.removeItem("token");
    changeToken(undefined);
  };
  const loginHandler = (token) => {
    window.localStorage.setItem("token", token);
    changeToken(token);
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

  const listEvents = () => {
    client.listEvents().then((response) => {
      let success = checkStatus(response);
      if (!success) {
        alert("Error connecting - please try again");
        return;
      }
      changeEvents(response.data);
    });
  };

  return (
    <Container>
      <MyNav />
      <Routes>
        <Route
          path="/"
          index
          element={
            token ? (
              <Dashboard
                listEvents={listEvents}
                events={events}
                client={client}
              />
            ) : (
              <Login
                loginHandler={(token) => {
                  loginHandler(token);
                }}
                client={client}
              />
            )
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

export default App;
