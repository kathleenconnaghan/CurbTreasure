import axios from "axios";

const SET_ITEMS = "SET_ITEMS";
const ADD_ITEM = "ADD_ITEM";
const SINGLE_ITEM = "SINGLE_ITEM";

// -------------- All Items Action Creator
export const setItems = items => {
  return {
    type: SET_ITEMS,
    items,
  };
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    item,
  };
};

export const singleItem = item => {
  return {
    type: SINGLE_ITEM,
    item,
  };
};

// --------------- All Items Thunk
export const fetchItems = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get("/api/items");
      dispatch(setItems(data));
    } catch (err) {
      console.log(err);
    }
  };
};
// --------------- Add New Item Thunk
export const addNewItem = (item) => {
  return async dispatch => {
    try{
      const config = {
          headers: {
              Authorization: window.localStorage.token 
          }
      }
      const { data } = await axios.post("/api/items", item, config);
      dispatch(addItem(data));
    } catch (err) {
      console.log(err);
      console.log('Error adding a new item')
    }
  };
};

export const fetchSingleItem = (id) => {
  return async (dispatch, getState) => {
    try {
      const {data} = await axios.get(`/api/items/${id}`)
      dispatch(singleItem(data))
    } catch (err) {
      console.log(err)
    }
  }
};

//--------- All Items Reducer
export default function allItemsReducer(state = [], action) {
  switch (action.type) {
    case SET_ITEMS:
      return action.items;
    case ADD_ITEM:
      return [...state, action.item];
    default:
      return state;
  }
}
