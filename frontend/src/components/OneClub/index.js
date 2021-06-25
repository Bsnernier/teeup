import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listClub } from "../../store/clubs";
import { listEvents } from "../../store/events";

import "./OneClub.css";

function OneClub() {
  const { id } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [club, setclub] = useState();
  const [allEvents, setAllEvents] = useState();
  let clubEvents = [];

  useEffect(() => {
    getOneClub();
    getAllEvents();
  }, []);

  if (!sessionUser) {
    return <Redirect to="/login" />;
  }

  const getOneClub = async () => {
    let club = await dispatch(listClub(id));
    setclub(club);
  };

  const getAllEvents = async () => {
    let events = await dispatch(listEvents());
    setAllEvents(events.events);
  };

  allEvents?.map((event) => {
    if (event.clubId === parseInt(id)) {
      clubEvents.push(event);
    }
  });

  return (
    <div className="clubBubble">
      <h1>{club?.id.name}</h1>
      <h3 className="clubAddress">
        {club?.id.address}, {club?.id.city}, {club?.id.state} {club?.id.zipCode}
      </h3>
      <div className="eventArranger">
        {!clubEvents ? (
          <div key="0">There are 0 Events Planned!</div>
        ) : (
          clubEvents.map((event) => (
            <div className="clubInfo" key={event.id}>
              <div key={event.name}>{event.name}</div>
              <div key={event.date}>{event.date}</div>
              <div key={event.capacity}>Group Capacity: {event.capacity}</div>
              <button type="button">Reserve a Spot!</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OneClub;
