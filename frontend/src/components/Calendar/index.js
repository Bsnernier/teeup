import React, { useState, useEffect } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDay, startOfToday, getDaysInMonth, startOfMonth } from "date-fns";

import "./Calendar.css";

function Calendar() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [todayDate, setTodayDate] = useState(startOfToday);
  const [todayDay, setTodayDay] = useState(getDay(todayDate));
  const [selectedDate, setSelectedDate] = useState();
  const [prevMonth, setPrevMonth] = useState();
  const [startMonthDay, setStartMonthDay] = useState(
    getDay(startOfMonth(todayDate))
  );
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(todayDate));

  if (!sessionUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="calContainer">
      <div className="grid__day">Sunday</div>
      <div className="grid__day">Monday</div>
      <div className="grid__day">Tuesday</div>
      <div className="grid__day">Wednesday</div>
      <div className="grid__day">Thursday</div>
      <div className="grid__day">Friday</div>
      <div className="grid__day">Saturday</div>
      <div className={`grid_week-1-${startMonthDay}`}>1</div>
      <div className="grid_week-1-test">{daysInMonth}</div>
    </div>
  );
}

export default Calendar;
