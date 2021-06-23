import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import YourGroupList from "../YourGroupList";
import EventGroupList from "../EventGroupList";
import "./Group.css";

function Group() {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div className="flexTest">
        <YourGroupList title="Your Groups" />
        <EventGroupList title="Your Group Events" />
      </div>
    </>
  );
}

export default Group;
