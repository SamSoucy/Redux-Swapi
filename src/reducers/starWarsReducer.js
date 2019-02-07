import {FETCH_CHARACTER_FETCHING,
        FETCH_CHARACTER_SUCCESS,
        FETCH_CHARACTER_FAILURE
        } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_FETCHING:
      return {
        ...state,
        fetching: true,
       
      };
    
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: [...state.characters, ...action.payload]
      };
    
    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};





