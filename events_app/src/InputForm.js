import React, { useState } from "react";

function InputForm(props) {
  const submitHandler = async (e) => {
    e.preventDefault();

    let res = await props.client.addEvent(
      e.target.name.value,
      e.target.location.value,
      e.target.info.value,
      e.target.date.value,
      e.target.time.value
    );
    console.log(res);
  };
  return (
    <div>
      <h1>Add new Event</h1>
      <form onSubmit={(e) => submitHandler(e)} id="addForm">
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
        <button type="submit" disabled={false}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}

export default InputForm;
