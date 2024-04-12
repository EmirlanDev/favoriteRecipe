import { actionType } from "./../actionType";

const INIT_STATE = {
  recipes: [],
  user: null,
  save: JSON.parse(localStorage.getItem("save")) || [],
};

export const MainReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.GET_RECIPE:
      return { ...state, recipes: action.payload };
    case actionType.GET_USER:
      return { ...state, user: action.payload };
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
