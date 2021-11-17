import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  const { setLoginEmail, setLoginPassword, emailError, passwordError, login } =
    props;

  return (
    <>
      <div className="account__box__body">
        <input
          type="text"
          placeholder="Email"
          autoFocus
          required
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <p className="account__box__body__message">{emailError}</p>
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <p className="account__box__body__message">{passwordError}</p>
      </div>
      <div className="account__box__footer">
        <button onClick={login}>Log In</button>
        <div className="account__box__footer__text">
          <p>Forgotten password?</p>
          <Link to={"/login"}>
            <p className="back">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
