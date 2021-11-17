import React from "react";

const Signup = (props) => {
  const {
    setSignupEmail,
    setSignupPassword,
    setConfirmPassword,
    emailError,
    passwordError,
    confirmPasswordError,
    signup,
  } = props;

  const onClickEvent = () => {
    signup();
  };

  return (
    <>
      <div className="account__box__body">
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setSignupEmail(event.target.value);
          }}
        />
        <p className="account__box__body__message">{emailError}</p>
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setSignupPassword(event.target.value);
          }}
        />
        <p className="account__box__body__message">{passwordError}</p>
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <p className="account__box__body__message">{confirmPasswordError}</p>
      </div>
      <div className="account__box__footer">
        <button onClick={onClickEvent}>Sign up</button>
      </div>
    </>
  );
};

export default Signup;
