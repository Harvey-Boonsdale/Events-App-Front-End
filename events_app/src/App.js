import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import EventCard from "./EventCard";

// define properties of event card

function App() {
  const [event, changeEvent] = useState({
    name: "",
    location: "",
    info: "",
    date: "",
    time: "",
    id: "",
  });

  // error message

  const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return true;
    } else {
      return false;
    }
  };

  // get data from server and populate event card

  async function fetchData() {
    let res = await axios.get("http://localhost:3001/events/");

    let success = checkStatus(res);
    if (!success) {
      alert("Error connecting - please try again");
      return;
    }

    changeEvent({
      name: res.data[0].name,
      location: res.data[0].location,
      info: res.data[0].info,
      date: res.data[0].date,
      time: res.data[0].time,
      id: res.data[0]._id,
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  //print event card

  return (
    <div>
      <div>
        <h2>Event Name: {event.name}</h2>
        <p>Location: {event.location}</p>
        <p>Info: {event.info}</p>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
      </div>
    </div>
  );
}

export default App;
