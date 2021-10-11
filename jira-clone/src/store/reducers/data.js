import {
  RECEIVE_API_DATA,
  UPDATE_DATA_UP_PROGRESS,
  UPDATE_DATA_UP_DONE,
  UPDATE_DATA_NOT_STARTED,
} from "../actions";

const Data = (state = {}, { type, data, payload }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    case UPDATE_DATA_UP_PROGRESS:
      state.forEach((el, index) => {
        if (el.id === payload) {
          state[index].progress = "progress";
        }
      });
      return state;
    case UPDATE_DATA_UP_DONE:
      state.forEach((el, index) => {
        if (el.id === payload) {
          state[index].progress = "done";
        }
      });
      return state;
    case UPDATE_DATA_NOT_STARTED:
      state.forEach((el, index) => {
        if (el.id === payload) {
          state[index].progress = "not_started";
        }
      });
      return state;
    default:
      return state;
  }
};

export default Data;
