import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listGroups } from "../../store/group";
import { listEvents, singleGroupEvents } from "../../store/events";
import "./EventGroupList.css";

function EventGroupList(title) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [allGroups, setAllGroups] = useState();
  const [allEvents, setAllEvents] = useState([]);
  // const [groupEvents, setGroupEvents] = useState();
  let yourGroups = [];

  useEffect(() => {
    getAllGroups();
    getAllEvents();
  }, []);

  const getAllGroups = async () => {
    let groups = await dispatch(listGroups());
    setAllGroups(groups.list);
  };

  const getAllEvents = async () => {
    let events = await dispatch(listEvents());
    setAllEvents(events.events);
  };

  // const findEventByGroupId = async (id) => {
  //   let event = await dispatch(singleGroupEvents(id));
  //   setGroupEvents(event.groupEvents);
  // };

  // const findYourGroups = () => {
  //   allGroups.map((group) => {
  //     if (group.userId === sessionUser.id) yourGroups.push(group);
  // });
  //   return yourGroups;
  // };

  // if (allGroups) {
  //   findYourGroups();
  // }

  // const findGroupEvent = (id) => {
  //   allEvents?.filter((event) => event.groupId === id);
  // };

  return (
    <div className="groupBubble">
      <h1>{title.title}</h1>
      <div>
        {!allEvents ? (
          <div key="0">There are 0 events!</div>
        ) : (
          yourGroups.map((group) => (
            <div key={group.id}>
              {group.Group.name} plays in the
              {/* {findEventByGroupId(group.id)} */}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EventGroupList;
