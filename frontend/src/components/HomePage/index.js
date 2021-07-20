import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listGroups, addToGroup } from "../../store/group";
import { listEvents } from "../../store/events";

import "./HomePage.css";

function HomePage() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
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

  const sendAddToGroup = async (id) => {
    let updatedGroups = await dispatch(addToGroup(id));
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
      let test = Object.values(group);
      let singleNames = [];
      if (singleGroups) {
        singleGroups.forEach((group) => singleNames.push(group.name));
      }
      if (
        !singleNames.includes(test[6].name) &&
        !yourGroups.includes(group.Group?.name)
      ) {
        singleGroups.push(group?.Group);
      }
    });
    return singleGroups;
  };

  if (allGroups) {
    findSingleGroups();
  }

  const handleClick = (e) => {
    e.preventDefault();
    const newGroupPayload = {};
    newGroupPayload[e.target.id] = sessionUser.id;
    sendAddToGroup(newGroupPayload);
    history.push("/");
    return history;
  };

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
                    {group.name}
                  </span>
                  <span>Capacity: {findGroupCapacity(group.name)}/4</span>
                  <button
                    type="button"
                    className={
                      findGroupCapacity(group.name) === 4
                        ? "disabled"
                        : "joinGroupButton"
                    }
                    id={group.id}
                    key={group?.id}
                    onClick={handleClick}
                    disabled={
                      findGroupCapacity(group.name) === 4 ? true : false
                    }
                  >
                    Join
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
