import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./../pages/Home/Home";
import { LogIn } from "./../components/LogIn";
import { SignUp } from "./../components/SignUp";
import { DetailCategories } from "../pages/DetailCateg/DetailCategories";
import { Saved } from "./../pages/Saved/Saved";
import { DetailPage } from "./../pages/DetailCateg/DetailPageCard/DetailPage";
import { AddNew } from "./../pages/AddNewRecipe/AddNew";
import { Search } from "./../components/Search";

export const MainRoutes = () => {
  const PUBLIC = [
    { path: "/", element: <Home /> },
    { path: "/log_in", element: <LogIn /> },
    { path: "/sign_up", element: <SignUp /> },
    { path: "/categories/:id", element: <DetailCategories /> },
    { path: "/categories/:id/:detailId", element: <DetailPage /> },
    { path: "/popular/:detailId", element: <DetailPage /> },
    { path: "/saved/popular/:detailId", element: <DetailPage /> },
    { path: "/saved", element: <Saved /> },
    { path: "/add_new_recipe", element: <AddNew /> },
    { path: "/search", element: <Search /> },
    { path: "/search/popular/:detailId", element: <DetailPage /> },
  ];

  return (
    <Routes>
      {PUBLIC.map((el, idx) => (
        <Route path={el.path} element={el.element} key={idx} />
      ))}
    </Routes>
  );
};
