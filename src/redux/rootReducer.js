import { SET_DOGS } from "./action-types";

const initialState = {
  articles: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOGS:
      return action.payload;
    default:
      return state;
  }
};

export default rootReducer;
