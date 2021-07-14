import { SET_DOGS } from "./action-types";

const initialState = {
  dogData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOGS:
      return { ...state, dogData: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
