import { csrfFetch } from "./csrf";

const GET_GROUPS = "groups/getGroups";
const ADD_ONE = "groups/addOne";

const getGroups = (list) => {
  return {
    type: GET_GROUPS,
    list,
  };
};

const addOneUser = (id) => ({
  type: ADD_ONE,
  id,
});

export const listGroups = () => async (dispatch) => {
  const response = await csrfFetch(`/api/groups`);

  if (response.ok) {
    const list = await response.json();
    dispatch(getGroups(list));
    return getGroups(list);
  }
};

export const addToGroup = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/groups/${payload}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const addReq = await response.json();
    dispatch(addOneUser(addReq));
    return addReq;
  }
};

const initialState = {};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GROUPS: {
      return {
        ...state,
        list: action.list,
      };
    }
    case ADD_ONE: {
      return {
        state,
        id: action.id,
      };
    }
    default:
      return state;
  }
};

export default groupReducer;
