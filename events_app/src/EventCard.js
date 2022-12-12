import React, { useState } from "react";

function EventCard(props) {
  return (
    <div>
      <h2>Event Name: {props.name}</h2>
      <p>Location: {props.location}</p>
      <p>Info: {props.info}</p>
      <p>Date: {props.date}</p>
      <p>Time: {props.time}</p>
    </div>
  );
}

export default EventCard;
