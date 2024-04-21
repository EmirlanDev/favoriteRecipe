import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";

export const Search = () => {
  const { recipes, search } = useSelector((s) => s);

  const searchValue = recipes.filter((el) => el.title.includes(search));
  console.log(searchValue);

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
                <h3 className="text-[30px]">Нету по вашему запросу</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
