import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./../pages/Home/Home";
import { LogIn } from "./../components/LogIn";
import { SignUp } from "./../components/SignUp";
import { DetailCategories } from "../pages/DetailCateg/DetailCategories";
import { Saved } from "./../pages/Saved/Saved";
import { DetailPage } from "./../pages/DetailCateg/DetailPageCard/DetailPage";
import { AddNew } from "./../pages/AddNewRecipe/AddNew";

export const MainRoutes = () => {
  const PUBLIC = [
    { path: "/", element: <Home /> },
    { path: "/log_in", element: <LogIn /> },
    { path: "/sign_up", element: <SignUp /> },
    { path: "/categories/:id", element: <DetailCategories /> },
    { path: "/categories/:id/:detailId", element: <DetailPage /> },
    { path: "/popular/:detailId", element: <DetailPage /> },
    { path: "/saved", element: <Saved /> },
    { path: "/add_new_recipe", element: <AddNew /> },
  ];

  return (
    <Routes>
      {PUBLIC.map((el, idx) => (
        <Route path={el.path} element={el.element} key={idx} />
      ))}
    </Routes>
  );
};
