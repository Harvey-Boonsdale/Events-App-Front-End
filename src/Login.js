import React, { useState } from "react";

function Login(props) {
  const [disabled, changeDisabled] = useState(false);
  console.log(res.data.token);

  const submitHandler = async (e) => {
    console.log(res.data.token);
    e.preventDefault();
    changeDisabled(true);
    try {
      console.log(res.data.token);
      const res = await props.client.login(
        e.target.username.value,
        e.target.password.value
      );
      props.loginHandler(res.data.token);
    } catch (error) {
      console.log(res.data.token);
      alert("Incorrect login: please try again");
    }
    changeDisabled(false);
  };

  return (
    <>
      <br />
      <h1>Login</h1>
      <br />
      <form onSubmit={(e) => submitHandler(e)}>
        Username
        <br />
        <input type="text" name="username" disabled={disabled} />
        <br />
        Password
        <br />
        <input type="password" name="password" disabled={disabled} />
        <br />
        <br />
        <button type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}

export default Login;
