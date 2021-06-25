import { csrfFetch } from "./csrf";

const GET_EVENTS = "events/getEvents";
const GET_GROUP_EVENTS = "events/getGroupEvents";

const getEvents = (events) => {
  return {
    type: GET_EVENTS,
    events,
  };
};

const getGroupEvents = (groupEvents) => {
  return {
    type: GET_GROUP_EVENTS,
    groupEvents,
  };
};

export const listEvents = () => async (dispatch) => {
  const response = await csrfFetch(`/api/events`);

  if (response.ok) {
    const list = await response.json();
    dispatch(getEvents(list));
    return getEvents(list);
  }
};

export const singleGroupEvents = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/`);

  if (response.ok) {
    const events = await response.json();
    dispatch(getGroupEvents(events));
    return getGroupEvents(events);
  }
};

const initialState = {};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS: {
      return {
        ...state,
        events: action.events,
      };
    }
    case GET_GROUP_EVENTS: {
      return {
        ...state,
        groupEvents: action.groupEvents,
      };
    }
    default:
      return state;
  }
};

export default eventsReducer;
