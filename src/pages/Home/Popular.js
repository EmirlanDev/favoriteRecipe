import React from "react";
import { Card } from "../../components/Card";
import { useRecipeContext } from "./../../context/RecipeContext";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Popular = () => {
  const { getRecipes } = useRecipeContext();
  const { recipes } = useSelector((s) => s);

  useEffect(() => {
    getRecipes();
  }, []);

  let popular = recipes
    .sort((a, b) => b.like.length - a.like.length)
    .slice(0, 9);

  return (
    <section className="pt-[50px]">
      <div className="container">
        <h1 className="text-6xl mb-6 max-[600px]:text-5xl">Популярные</h1>
        <div className="popular">
          {popular.map((el, idx) => (
            <div key={idx}>
              <Card el={el} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
