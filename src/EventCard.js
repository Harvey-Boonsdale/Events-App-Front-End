// import React, { useState } from "react";

function EventCard(props) {
  return (
    <div>
      <h2>Event Name: {props.postToDisplay.name}</h2>
      <p>Location: {props.postToDisplay.location}</p>
      <p>Info: {props.postToDisplay.info}</p>
      <p>Date: {props.postToDisplay.date}</p>
      <p>Time: {props.postToDisplay.time}</p>
    </div>
  );
}

export default EventCard;
