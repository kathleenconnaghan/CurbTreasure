import axios from "axios";

const SET_SINGLE_ITEM = "SET_SINGLE_ITEM";

//------------------Single Item Creator
export const setSingleItem = item => {
  return {
    type: SET_SINGLE_ITEM,
    item,
  };
};

//---------------- Single Item Thunk
export const fetchSingleItem = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/items/${id}`);
      dispatch(setSingleItem(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//-------------- Single Item Reducer
export default function singleItemReducer(state = {}, action) {
  switch (action.type) {
    case SET_SINGLE_ITEM:
      return action.item;
    default:
      return state;
  }
}
