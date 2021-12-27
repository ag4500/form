import { SET_SHOW } from "../actions";
const initialState = {
  show: false,
};

export default function toggle(state = initialState, action) {
  switch (action.type) {
    case SET_SHOW:
      return {
        ...state,
        show: action.payload,
      };
    default:
      return state;
  }
}
