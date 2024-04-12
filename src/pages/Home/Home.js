import React from "react";
import { AddMyRecipe } from "./AddMyRecipe";
import { Hero } from "./Hero";
import { Popular } from "./Popular";
import { Subscribe } from "./Subscribe";
import { Categories } from "./Categories";

export const Home = () => {
  return (
    <>
      <Hero />
      <AddMyRecipe />
      <Categories />
      <Subscribe />
      <Popular />
    </>
  );
};
