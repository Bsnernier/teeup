import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupFormPage.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="signupContainer">
        <ul className="errors">
          {errors.map((error, idx) => (
            <li key={idx} className="errors-error">
              {error}
            </li>
          ))}
        </ul>
        <label className="signupLabel">
          Email
          <input
            className="signupInput"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="signupLabel">
          Username
          <input
            className="signupInput"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className="signupLabel">
          Password
          <input
            className="signupInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className="signupLabel">
          Confirm Password
          <input
            className="signupInput"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <div>
          <button className="signupButton" type="submit">
            Sign Up
          </button>
          <button
            className="signupButton"
            type="click"
            onClick={() => (window.location.href = "/login")}
          >
            Already a User? Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignupFormPage;
