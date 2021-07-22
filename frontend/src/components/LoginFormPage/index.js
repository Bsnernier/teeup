import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    console.log(e.nativeEvent.submitter.value);
    if (e.nativeEvent.submitter.value === "demo") {
      setCredential("demo@user.io");
      setPassword("password");
      return dispatch(sessionActions.login({ credential, password }));
    }
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="loginContainer">
        <ul className="errors">
          {errors.map((error, idx) => (
            <li key={idx} className="errors-error">
              {error}
            </li>
          ))}
        </ul>
        <label className="loginLabel">
          Username or Email
          <input
            className="loginInput"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label className="loginLabel">
          Password
          <input
            className="loginInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div>
          <button className="loginButton" type="submit">
            Log In
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "/signup")}
          >
            Sign Up Here
          </button>
          <button type="submit" value="demo">
            Demo User
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginFormPage;
