import React, { useState, useEffect } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getDay,
  getMonth,
  startOfToday,
  getDaysInMonth,
  startOfMonth,
  lastDayOfMonth,
  toDate,
  format,
} from "date-fns";

import "./Calendar.css";

function Calendar() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [todayDate, setTodayDate] = useState(startOfToday);
  const [todayDayNum, setTodayDayNum] = useState(format(todayDate, "d"));
  const [todayMonth, setTodayMonth] = useState(getMonth(todayDate));
  const [prevMonth, setPrevMonth] = useState(todayMonth - 1);
  const [prevMonthDate, setPrevMonthDate] = useState(
    toDate(new Date(2021, prevMonth, 1, 11, 11, 30, 30))
  );
  const [startMonthDay, setStartMonthDay] = useState(
    getDay(startOfMonth(todayDate))
  );
  const [startMonthNum, setStartMonthNum] = useState(1);
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(todayDate));
  const [daysInPrevMonth, setDaysInPrevMonth] = useState(
    getDaysInMonth(prevMonthDate)
  );

  const monthArr = [];
  const prevMonthArr = [];
  const nextMonthArr = [];
  let countDay = startMonthDay + 1;
  let countWeek = 1;

  if (!sessionUser) {
    return <Redirect to="/login" />;
  }

  const makeMonthArr = () => {
    for (let i = 0; i < daysInMonth; i++) {
      monthArr.push(i + 1);
    }
    let firstDay = monthArr.shift();
  };
  makeMonthArr();

  const makePrevMonthArr = () => {
    for (let i = 0; i < startMonthDay; i++) {
      prevMonthArr.unshift(daysInPrevMonth - i);
    }
  };
  makePrevMonthArr();

  let datesFilled = monthArr.length + prevMonthArr.length;

  const makeNextMonthArr = () => {
    for (let i = datesFilled; i < 42; i++) {
      nextMonthArr.unshift(42 - i);
    }
    let firstDay = nextMonthArr.pop();
  };
  makeNextMonthArr();

  const findGridPosition = () => {
    if (countDay < 8) {
      if (countDay === 7) {
        countWeek += 1;
        countDay = 0;
      }
      countDay += 1;
      return `grid_week-${countWeek}-${countDay - 1}`;
    }
    if (countDay > daysInMonth) {
      return;
    }
  };

  return (
    <div className="calContainer">
      <div className="grid__day">Sunday</div>
      <div className="grid__day">Monday</div>
      <div className="grid__day">Tuesday</div>
      <div className="grid__day">Wednesday</div>
      <div className="grid__day">Thursday</div>
      <div className="grid__day">Friday</div>
      <div className="grid__day">Saturday</div>
      {prevMonthArr.map((day) => (
        <div
          key={day}
          className={`grid_week-1-${day - prevMonthArr[0]} not_current_month`}
        >
          {day}
        </div>
      ))}
      <div className={`grid_week-1-${startMonthDay}`}>{startMonthNum}</div>
      {monthArr.map((day) =>
        day === parseInt(todayDayNum) ? (
          <div key={day} className={`${findGridPosition()} currentday`}>
            {day}
          </div>
        ) : (
          <div key={day} className={findGridPosition()}>
            {day}
          </div>
        )
      )}
      {nextMonthArr.map((day) => (
        <div key={day} className={`grid_week-6-${day - 1} not_current_month`}>
          {day}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
