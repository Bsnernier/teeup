import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listGroups } from "../../store/group";
import { listEvents } from "../../store/events";

import TestSection from "../TestSection";
import "./HomePage.css";

function HomePage() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [allGroups, setAllGroups] = useState();
  const [allEvents, setAllEvents] = useState();
  let singleGroups = [];
  let yourGroups = [];

  useEffect(() => {
    getAllGroups();
    getAllEvents();
  }, []);

  if (!sessionUser) {
    return <Redirect to="/login" />;
  }

  const getAllGroups = async () => {
    let groups = await dispatch(listGroups());
    setAllGroups(groups.list);
  };

  const getAllEvents = async () => {
    let events = await dispatch(listEvents());
    setAllEvents(events.list);
  };

  allGroups?.map((group) => {
    if (group.userId === sessionUser.id) yourGroups.push(group.Group.name);
  });

  const findGroupCapacity = (groupName) => {
    let count = 0;
    allGroups.map((group) => {
      if (group.Group.name === groupName) {
        count++;
      }
    });
    return count;
  };

  const findSingleGroups = () => {
    allGroups.map((group) => {
      if (
        !singleGroups.includes(group.Group?.name) &&
        !yourGroups.includes(group.Group?.name)
      )
        singleGroups.push(group.Group?.name);
    });
    return singleGroups;
  };
  if (allGroups) {
    findSingleGroups();
  }
  console.log(allGroups);

  return (
    <>
      <div className="flexTest">
        <div className="homeBubble">
          <h1>Available Groups</h1>
          <div className="homeGroupArranger">
            {!allGroups ? (
              <div key="0">There are 0 groups!</div>
            ) : (
              singleGroups.map((group) => (
                <div className="groupAndButton">
                  <span className="groupName" key={group?.name}>
                    {group}
                  </span>
                  <span>Capacity: {findGroupCapacity(group)}/4</span>
                  <button className="joinGroupButton" key={group?.id}>
                    Join
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
        <TestSection />
      </div>
    </>
  );
}

export default HomePage;
