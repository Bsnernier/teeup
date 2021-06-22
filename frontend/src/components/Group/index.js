import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import GroupList from "../GroupList";
import "./Group.css";

function Group() {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <div className="flexTest">
        <GroupList title="Your Groups"/>
        <GroupList title="Club/Event Groups"/>
      </div>
    </>
  );
}

export default Group;
