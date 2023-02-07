import React, { useState } from "react";

function Login(props) {
  const [disabled, changeDisabled] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    changeDisabled(true);
    try {
      const res = await props.client.login(
        e.target.username.value,
        e.target.password.value
      );
      console.log(res.data.token);
      props.loginHandler(res.data.token);
    } catch (error) {
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
