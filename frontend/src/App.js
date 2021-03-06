import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Group from "./components/Group";
import Clubs from "./components/Clubs";
import OneClub from "./components/OneClub";
import Calendar from "./components/Calendar";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/groups">
            <Group />
          </Route>
          <Route exact path="/clubs">
            <Clubs />
          </Route>
          <Route path="/clubs/:id">
            <OneClub />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route>
            <Calendar path="/calendar" />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
