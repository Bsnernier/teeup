import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginFormModal.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (e.target.value === "demo") {
      return dispatch(sessionActions.login("demo@user.io", "password"));
    }
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form className="loginModalBox" onSubmit={handleSubmit}>
      <ul className="errors">
        {errors.map((error, idx) => (
          <li key={idx} className="errors-error">
            {error}
          </li>
        ))}
      </ul>
      <label>
        Username or Email{" "}
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Log In</button>
      <button type="button" value="demo">
        Demo User
      </button>
    </form>
  );
}

export default LoginForm;
