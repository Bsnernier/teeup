import { csrfFetch } from "./csrf";

const GET_EVENTS = "events/getEvents";

const getEvents = (list) => {
  return {
    type: GET_EVENTS,
    list,
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

const initialState = {};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS: {
      return {
        ...state,
        list: action.list,
      };
    }
    default:
      return state;
  }
};

export default eventsReducer;
