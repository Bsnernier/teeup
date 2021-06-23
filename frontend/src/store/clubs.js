import { csrfFetch } from "./csrf";

const GET_CLUBS = "clubs/getClubs";
const GET_ONE_CLUB = "clubs/getOneClub";

const getClubs = (list) => {
  return {
    type: GET_CLUBS,
    list,
  };
};

const getOneClub = (id) => {
  return {
    type: GET_ONE_CLUB,
    id,
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

export const listClub = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/clubs/${id}`);

  if (response.ok) {
    const club = await response.json();
    dispatch(getOneClub(club));
    return getOneClub(club);
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
    case GET_ONE_CLUB: {
      return {
        state,
        id: action.id,
      };
    }
    default:
      return state;
  }
};

export default clubsReducer;
