import { csrfFetch } from "./csrf";

const GET_CLUBS = "clubs/getClubs";

const getClubs = (list) => {
  return {
    type: GET_CLUBS,
    list,
  };
};

export const listClubs = () => async (dispatch) => {
  const response = await csrfFetch(`/api/clubs`);

  if (response.ok) {
    const list = await response.json();
    dispatch(getClubs(list));
    return getClubs(list);
  }
};

const initialState = {};

const clubsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLUBS: {
      return {
        ...state,
        list: action.list,
      };
    }
    default:
      return state;
  }
};

export default clubsReducer;
