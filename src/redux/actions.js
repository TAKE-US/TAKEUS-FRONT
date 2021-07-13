import { SET_DOGS } from "redux/action-types";

export const setDogs = dog => ({
  type: SET_DOGS,
  payload: dog,
});
