import { csrfFetch } from "./csrf";

const GET_GROUPS = "groups/getGroups"

const getGroups = (list) => {
  return {
    type: GET_GROUPS,
    list,
  }
}

export const listGroups = () => async (dispatch) => {
  const response = await csrfFetch(`/api/groups`)

  if (response.ok) {
    const list = await response.json()
    dispatch(getGroups(list))
    return getGroups(list)
  }
}

const initialState = {};

const groupReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case GET_GROUPS: {
      return {
        ...state,
        list: action.list
      }
    }
    default:
      return state;
  }
}

export default groupReducer;
