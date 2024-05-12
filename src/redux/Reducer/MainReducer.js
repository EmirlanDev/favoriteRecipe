import { actionType } from "./../actionType";

const INIT_STATE = {
  recipes: [],
  user: null,
  save: JSON.parse(localStorage.getItem("save")) || [],
  search: "",
  oneRecipe: null,
};

export const MainReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.GET_RECIPE:
      return { ...state, recipes: action.payload };
    case actionType.GET_USER:
      return { ...state, user: action.payload };
    case actionType.SEARCH:
      return { ...state, search: action.payload };
    case actionType.ONE_RECIPE:
      return { ...state, oneRecipe: action.payload };
    case actionType.ADD_SAVE:
      const fount = state.save.find((el) => el.id === action.payload.id);
      if (fount) {
        return {
          ...state,
          save: state.save.filter((el) => el.id !== action.payload.id),
        };
      }
      state.save.push(action.payload);
      return { ...state, save: state.save };
    default:
      return state;
  }
};
