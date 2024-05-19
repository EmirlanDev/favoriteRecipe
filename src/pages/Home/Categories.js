import React from "react";
import breakfast from "../../assets/breakfast.png";
import lunch from "../../assets/lunch.png";
import dinner from "../../assets/dinner.png";
import snack from "../../assets/snack.png";
import salat from "../../assets/salat.png";
import pizza from "../../assets/pizza.png";
import smoothy from "../../assets/smoothy.png";
import pasta from "../../assets/pasta.png";
import etno from "../../assets/etno.png";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const categories = [
    { img: breakfast, title: "Завтраки", id: "breakfast" },
    { img: lunch, title: "Обеды", id: "lunch" },
    { img: dinner, title: "Ужины", id: "dinner" },
    { img: snack, title: "Закуски", id: "snack" },
    { img: salat, title: "Салаты", id: "salat" },
    { img: pizza, title: "Пиццы", id: "pizza" },
    { img: smoothy, title: "Смузи", id: "smoothy" },
    { img: pasta, title: "Пасты", id: "pasta" },
    {
      img: "https://img1.russianfood.com/dycontent/images_upl/266/big_265023.jpg",
      title: "Напитки",
      id: "drink",
    },
    {
      img: "https://kuhnea.files.wordpress.com/2015/02/psennaia.jpg",
      title: "Детские",
      id: "kids",
    },
    { img: etno, title: "Этно", id: "etno" },
  ];

  const navigate = useNavigate();

  return (
    <section data-aos="fade-right" className="pt-[100px]">
      <div className="container">
        <h1 className="text-6xl mb-6 max-[600px]:text-5xl">Категории</h1>
        <div className="categories">
          {categories.map((el, idx) => (
            <div
              onClick={() => navigate(`/categories/${el.id}`)}
              className="flex flex-col items-center"
              key={idx}
            >
              <img
                src={el.img}
                alt="categories"
                className="w-[150px] h-[150px] object-cover rounded-[50%] max-[600px]:w-[190px] max-[600px]:h-[190px]"
              />
              <h3 className="text-[25px] text-center mt-[15px] max-[600px]:text-[28px] font-semibold">
                {el.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
