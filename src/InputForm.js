import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function InputForm(props) {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    props.client.addEvent(
      e.target.name.value,
      e.target.location.value,
      e.target.info.value,
      e.target.date.value,
      e.target.time.value
    );
    props.listEvents();
    navigate("/");
  };
  return (
    <div>
      <h1>Add new Event</h1>
      <Form onSubmit={(e) => submitHandler(e)} id="addForm">
        Event Name:
        <br />
        <input type="text" name="name" />
        <br />
        Location:
        <br />
        <input type="text" name="location" />
        <br />
        Info:
        <br />
        <input type="text" name="info" />
        <br />
        Date:
        <br />
        <input type="date" name="date" />
        <br />
        Time:
        <br />
        <input type="time" name="time" />
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

export default InputForm;
