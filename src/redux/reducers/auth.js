import { SET_AUTH } from "../actions/auth";

const initialState = {
  token: null
};

export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case SET_AUTH:
      return {
        ...state,
        token: payload.token
      }

    default:
      return state;
  }
}
