import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";

import ballTee from "./balltee.jpg";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }
  console.log(window.store.getState())

  return (
    <>
      <div className="titleBar">
        <img className="image" src={ballTee}></img>
        <h1 className="title">Teeup</h1>
      </div>
      <div className="navAndProfile">
        <ul className="linkList">
          {/* <span>Welcome {sessionUser.username}!</span> */}
          {sessionUser ? <span>Welcome {sessionUser.username}!</span> : <span>Welcome to Teeup!</span>}
          <li className="link">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink exact to="/groups">
              Groups
            </NavLink>
          </li>
          <li className="link">
            <NavLink exact to="/">
              Clubs
            </NavLink>
          </li>
          <li className="link">
            <NavLink exact to="/">
              Calendar
            </NavLink>
          </li>
        </ul>
        <div className="profile">{isLoaded && sessionLinks}</div>
      </div>
    </>
  );
}

export default Navigation;
