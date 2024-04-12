import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import { MainReducer } from "./Reducer/MainReducer";

export const store = createStore(MainReducer, composeWithDevTools());
