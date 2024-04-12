import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecipeContext } from "./context/RecipeContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AuthContext } from "./context/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthContext>
        <RecipeContext>
          <App />
        </RecipeContext>
      </AuthContext>
    </Provider>
  </BrowserRouter>
);
