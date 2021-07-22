import React, { useState, useEffect } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listGroups } from "../../store/group";
import { listEvents, singleGroupEvents } from "../../store/events";
import {
  getDay,
  getDate,
  getMonth,
  startOfToday,
  getDaysInMonth,
  startOfMonth,
  lastDayOfMonth,
  toDate,
  format,
  isThisMonth,
} from "date-fns";

import "./Calendar.css";

function Calendar() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [allGroups, setAllGroups] = useState();
  const [allEvents, setAllEvents] = useState([]);
  let yourGroups = [];

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
  let monthEvents = {};
  let monthEventDates = [];

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

  if (!sessionUser) {
    return <Redirect to="/login" />;
  }

  const makeMonthArr = () => {
    for (let i = 0; i < daysInMonth; i++) {
      monthArr.push(i + 1);
    }
    monthArr.shift();
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
    nextMonthArr.pop();
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

  allEvents.forEach((event) => {
    let eventMonth = toDate(new Date(event.date));
    let eventMonthDate = getDate(eventMonth);
    if (isThisMonth(eventMonth) && !monthEvents[eventMonthDate]) {
      monthEvents[eventMonthDate] = [];
      monthEvents[eventMonthDate].push(event.name);
    } else if (isThisMonth(eventMonth)) {
      monthEvents[eventMonthDate].push(event.name);
    }
  });

  console.log(monthEvents);

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
      <div className={`grid_week-1-${startMonthDay}`}>
        <div>{startMonthNum}</div>
        {monthEvents[startMonthNum]?.map((event) => {
          <div>{event}</div>;
        })}
      </div>
      {monthArr.map((day) =>
        day === parseInt(todayDayNum) ? (
          <div key={day} className={`${findGridPosition()} currentday`}>
            <div>{day}</div>
          </div>
        ) : (
          <div key={day} className={findGridPosition()}>
            <div>{day}</div>
            {monthEvents[day]?.map((event) => {
              <div>{event}</div>;
            })}
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
