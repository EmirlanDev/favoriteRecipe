import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const { recipes, search } = useSelector((s) => s);

  const searchValue = recipes.filter((el) =>
    el.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(searchValue);

  const navigate = useNavigate();

  return (
    <div className="pt-[100px] max-[720px]:pt-[80px]">
      <div className="container">
        <div className="my-[60px]">
          <div className="popular">
            {searchValue.length > 0 ? (
              searchValue.map((el, idx) => (
                <div key={idx}>
                  <Card el={el} />
                </div>
              ))
            ) : (
              <div className="load">
                <h3 className="text-[24px] max-[470px]:text-[18px] text-center">
                  К сожалению ,по Вашему запросу ничего не найдено …
                  <br />
                  <span className="flex gap-1">
                    <span
                      onClick={() => navigate("/add_new_recipe")}
                      className="text-[#2669c8] underline"
                    >
                      Добавьте
                    </span>
                    свой рецепт и развивайтесь вместе с нами!
                  </span>
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
