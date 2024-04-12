import React from "react";
import addRecipe from "../../assets/addRecipe.png";
import { useNavigate } from "react-router-dom";

export const AddMyRecipe = () => {
  const navigate = useNavigate();
  return (
    <section className="mt-[260px] pb-[40px] max-[720px]:mt-[100px] ">
      <div className="container">
        <div className="flex justify-around items-center gap-[20px] max-[720px]:flex-col">
          <img
            className="w-[30%] max-[1024px]:w-[40%] max-[720px]:w-[60%] max-[620px]:w-[80%]"
            src={addRecipe}
            alt=""
          />
          <div className="flex flex-col text-end items-end max-[720px]:items-center">
            <h1 className="text-[60px] flex flex-col text-end leading-tight max-[1024px]:text-5xl max-[1024px]:font-semibold max-[720px]:text-center max-[620px]:text-4xl">
              Поделись Своим <span className="text-[#FF9A31]">Рецептом</span>
            </h1>
            <h6 className="text-[24px] max-w-[500px] my-[40px] max-[720px]:text-center max-[620px]:text-xl max-[620px]:my-[25px]">
              Поделись с своими самыми крутыми рецептами и получи отзыв
            </h6>
            <button
              onClick={() => {
                navigate("/add_new_recipe");
                setTimeout(() => {
                  window.scroll(0, 0);
                }, 100);
              }}
              className="text-[20px] h-[40px] bg-[#714424] px-[16px] text-[#fff] flex items-center rounded-[10px]"
            >
              Создать новый рецепт
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
