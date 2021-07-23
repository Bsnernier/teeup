import { csrfFetch } from "./csrf";

const GET_GROUPS = "groups/getGroups";
const ADD_ONE = "groups/addOne";
const LEAVE_ONE = "groups/leaveOneGroup";

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

const leaveOneGroup = (id) => ({
  type: LEAVE_ONE,
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

export const removeFromGroup = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/groups/${payload.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const removeReq = await response.json();
    dispatch(leaveOneGroup(removeReq));
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
    case LEAVE_ONE: {
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    }
    default:
      return state;
  }
};

export default groupReducer;
