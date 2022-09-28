import { mockSearchResults } from "../staticData";

const initialState = {
  companiesList: mockSearchResults,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_WHISHLIST": {
      return {
        ...state,
        companiesList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
