import React, { useState, useEffect } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDay, startOfToday, getDaysInMonth } from "date-fns";

import "./Calendar.css";

function Calendar() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [today, setToday] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [prevMonth, setPrevMonth] = useState();
  const [currMonth, setCurrMonth] = useState();

  if (!sessionUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="calContainer">
      <div className="dayRow">Sunday</div>
      <div className="dayRow">Monday</div>
      <div className="dayRow">Tuesday</div>
      <div className="dayRow">Wednesday</div>
      <div className="dayRow">Thursday</div>
      <div className="dayRow">Friday</div>
      <div className="dayRow">Saturday</div>
      <div>{getDay(startOfToday())}</div>
      <div>{getDaysInMonth(startOfToday())}</div>
    </div>
  );
}

export default Calendar;
