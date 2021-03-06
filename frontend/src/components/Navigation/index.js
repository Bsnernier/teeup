import React from "react";
import { NavLink, Redirect } from "react-router-dom";
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
    <Redirect to="/login" />;
  }

  return (
    <>
      <div className="titleBar">
        <img className="image" src={ballTee} alt="not found"></img>
        <h1 className="title">Teeup</h1>
      </div>
      <div className="navAndProfile">
        <ul className="linkList">
          {sessionUser ? (
            <span>Welcome {sessionUser.username}!</span>
          ) : (
            <span>Welcome!</span>
          )}
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
            <NavLink exact to="/clubs">
              Clubs
            </NavLink>
          </li>
          <li className="link">
            <NavLink exact to="/calendar">
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
