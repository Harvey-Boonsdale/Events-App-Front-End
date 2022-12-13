import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import EventCard from "./EventCard";
import InputForm from "./InputForm";

// initialise properties of event card

function App() {
  const [events, changeEvents] = useState([]);

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
    console.log(res.data);
    changeEvents(res.data);
  };

  // runs when page renders for the first time

  useEffect(() => {
    listEvents();
  }, []);

  const makeEvents = () => {
    return events.map((event) => {
      console.log(event);
      return <EventCard postToDisplay={event} />;
    });
  };

  //print event card

  return (
    <div>
      <div>
        <InputForm />
      </div>
      <h1>Your Events</h1>
      <div>{makeEvents()}</div>
    </div>
  );
}

export default App;
