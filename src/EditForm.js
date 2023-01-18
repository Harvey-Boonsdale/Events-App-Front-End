import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Form populated with event to edit

function EditForm(props) {
  const navigate = useNavigate();
  // props.events has list of all events
  // using useParams find ID of post from URL
  const { id } = useParams();

  // Find the one event in props.events that matches ID

  const findEvent = props.events.find((event) => {
    return event._id === id;
  });

  // Store in variable and take data to populate the form

  const [formValues, changeFormValues] = useState({
    name: findEvent.name,
    location: findEvent.location,
    info: findEvent.info,
    date: findEvent.date,
    time: findEvent.time,
  });

  const handleChange = (event) => {
    const newState = { ...formValues };
    newState[event.target.name] = event.target.value;
    changeFormValues(newState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    props.client.editEvent(formValues, id);
    props.listEvents();
    navigate("/view");
  };

  return (
    <div>
      <h1>Edit Event</h1>
      <Form onSubmit={(e) => submitHandler(e)} id="editForm">
        Event Name:
        <br />
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={(event) => handleChange(event)}
        />
        <br />
        Location:
        <br />
        <input
          type="text"
          name="location"
          value={formValues.location}
          onChange={(event) => handleChange(event)}
        />
        <br />
        Info:
        <br />
        <input
          type="text"
          name="info"
          value={formValues.info}
          onChange={(event) => handleChange(event)}
        />
        <br />
        Date:
        <br />
        <input
          type="date"
          name="date"
          value={formValues.date}
          onChange={(event) => handleChange(event)}
        />
        <br />
        Time:
        <br />
        <input
          type="time"
          name="time"
          value={formValues.time}
          onChange={(event) => handleChange(event)}
        />
        <br />
        <br />
        <Button type="submit" disabled={false}>
          {" "}
          Submit{" "}
        </Button>
      </Form>
    </div>
  );
}

export default EditForm;
