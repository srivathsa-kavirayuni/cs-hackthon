import { mockSearchResults } from "../staticData";

const initialState = {
  companiesList: mockSearchResults,
  // companiesList: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_WHISHLIST": {
      return {
        ...state,
        companiesList: action.payload,
      };
    }
    // case "GET_COMPANY": {
    //   return {
    //     ...state,
    //     company: action.payload,
    //   };
    // }
    // case "GET_RECOMMENDED": {
    //   return {
    //     ...state,
    //     companiesList: action.payload.recommendedCompanies,
    //   };
    // }
    default:
      return state;
  }
};

export default appReducer;
