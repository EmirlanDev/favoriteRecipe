import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { Card } from "../../components/Card";
import { useSelector } from "react-redux";
import { useRecipeContext } from "./../../context/RecipeContext";

export const DetailCategories = () => {
  const { id } = useParams();
  const [search, setSearch] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const [categor, setCategor] = useState("");
  const navigate = useNavigate();
  const { recipes } = useSelector((s) => s);
  const { getRecipes } = useRecipeContext();

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
    if (id == "breakfast") {
      setCategor("Рецепты завтраков");
    } else if (id == "lunch") {
      setCategor("Рецепты обеда");
    } else if (id == "dinner") {
      setCategor("Рецепты ужина");
    } else if (id == "snack") {
      setCategor("Рецепты закусок");
    } else if (id == "salat") {
      setCategor("Рецепты салатов");
    } else if (id == "pizza") {
      setCategor("Рецепты пиццы");
    } else if (id == "smoothy") {
      setCategor("Рецепты смузи");
    } else if (id == "pasta") {
      setCategor("Рецепты пасты");
    } else if (id == "drink") {
      setCategor("Напитки");
    } else if (id == "kids") {
      setCategor("Детские");
    } else if (id == "etno") {
      setCategor("Этно");
    }
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const categorCards = recipes.filter((el) => el.category === categor);

  // function getSearchRes() {
  //   if (search) {
  //     setSearchRes(
  //       categorCards.filter((recipe) => recipe.title.includes(search))
  //     );
  //   }
  // }

  // function onKeyEnter(e) {
  //   if (e.key === "Enter") {
  //     getSearchRes();
  //   }
  // }

  // useEffect(() => {
  //   setSearchRes([]);
  // }, [search]);

  // let categorOfsearch =
  //   search && searchRes.length > 0 ? searchRes : categorCards;

  return (
    <section className="pt-[100px] max-[720px]:pt-[80px]">
      <div className="container">
        <div>
          <h1 className="text-4xl my-6">{categor}</h1>
        </div>
        <div className="popular">
          {categorCards.length > 0 ? (
            categorCards.map((el, idx) => (
              <div key={idx}>
                <Card el={el} id={id} />
              </div>
            ))
          ) : (
            <div className="load">
              <div class="loader"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
