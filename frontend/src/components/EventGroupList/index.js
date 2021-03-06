import React, { useState, useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { listGroups } from "../../store/group";
import { listEvents, singleGroupEvents } from "../../store/events";
import "./EventGroupList.css";

function EventGroupList(title) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [allGroups, setAllGroups] = useState();
  const [allEvents, setAllEvents] = useState([]);
  const [groupEvents, setGroupEvents] = useState();
  let yourGroups = [];
  let eventGroupIds = [];

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

  const findYourGroups = () => {
    allGroups.map((group) => {
      if (group.userId === sessionUser.id) yourGroups.push(group);
    });
    return yourGroups;
  };

  if (allGroups) {
    findYourGroups();
  }

  return (
    <div className="eventBubble">
      <h1>{title.title}</h1>
      <div className="eventArranger">
        {!allEvents ? (
          <div key="0">There are 0 events!</div>
        ) : (
          allEvents.map((event) => (
            <>
              <div key={event.id} className="groupName">
                {event.Group.name} - {event.name}
              </div>
              <div className="eventName">Club: {event.Club.name}</div>
              <div className="eventDate">
                Date: {moment(event.date).format("MM-DD-YYYY")}
              </div>
              <div className="eventTime">
                Time: {moment(event.date).format("h:mm")}
              </div>
            </>
          ))
        )}
      </div>
    </div>
  );
}

export default EventGroupList;
