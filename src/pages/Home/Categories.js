import React from "react";
import breakfast from "../../assets/breakfast.png";
import lunch from "../../assets/lunch.png";
import dinner from "../../assets/dinner.png";
import snack from "../../assets/snack.png";
import salat from "../../assets/salat.png";
import pizza from "../../assets/pizza.png";
import smoothy from "../../assets/smoothy.png";
import pasta from "../../assets/pasta.png";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const categories = [
    { img: breakfast, title: "Рецепты завтраков", id: "breakfast" },
    { img: lunch, title: "Рецепты обеда", id: "lunch" },
    { img: dinner, title: "Рецепты ужина", id: "dinner" },
    { img: snack, title: "Рецепты закусок", id: "snack" },
    { img: salat, title: "Рецепты салатов", id: "salat" },
    { img: pizza, title: "Рецепты пиццы", id: "pizza" },
    { img: smoothy, title: "Рецепты смузи", id: "smoothy" },
    { img: pasta, title: "Рецепты пасты", id: "pasta" },
  ];

  const navigate = useNavigate();

  return (
    <section className="pt-[100px]">
      <div className="container">
        <h1 className="text-6xl mb-6 max-[600px]:text-5xl">Категории</h1>
        <div className="categories">
          {categories.map((el, idx) => (
            <div
              onClick={() => navigate(`/categories/${el.id}`)}
              className="flex flex-col items-center"
              key={idx}
            >
              <img src={el.img} alt="categories" />
              <h3 className="text-[28px] text-center mt-[15px]">{el.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
