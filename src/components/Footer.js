import React from "react";
import logo from "../assets/logoFooter.svg";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#8D6A46] max-[1024px]:hidden">
      <div className="container">
        <div className="pt-[50px]">
          <div className="flex justify-between border-b-[1px] border-[#fff] pb-[30px]">
            <div>
              <img src={logo} alt="" />
              <p className="text-[18px] leading-5 text-[#fff] mt-[20px]">
                В любой непонятной ситуации <br /> стоит хорошенько поесть.
              </p>
            </div>
            <nav className="flex flex-col gap-[10px]">
              <li
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    window.scroll(0, 1450);
                  }, 200);
                }}
                className="text-[20px] text-[#fff] cursor-pointer max-[1024px]:hidden"
              >
                Категории
              </li>
              <li
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    window.scroll(0, 2700);
                  }, 100);
                }}
                className="text-[20px] text-[#fff] cursor-pointer max-[1024px]:hidden"
              >
                Популярные
              </li>
              <li
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    window.scroll(0, 730);
                  }, 100);
                }}
                className="text-[20px] text-[#fff] cursor-pointer max-[1024px]:hidden"
              >
                Добавить рецепт
              </li>
            </nav>
            <form className="flex flex-col items-center gap-[20px] max-w-[377px] w-[100%]">
              <h1 className="text-[35px] text-[#FF9A31] leading-7 font-semibold">
                Новостная рассылка
              </h1>
              <h4 className="text-[#dcdcdcde] text-[18px] leading-6">
                подпишитесь на нашу рассылку, чтобы <br /> получать больше
                бесплатных советов
              </h4>
              <input
                className="w-[100%] h-[40px] rounded-[8px] px-[15px] text-[17px]"
                type="email"
                placeholder="Напиши Cвой Email"
              />
              <button className="w-[100%] h-[40px] rounded-[8px] bg-[#FF9A31] text-[20px] text-[#fff] font-semibold tracking-widest">
                Подписаться
              </button>
            </form>
          </div>
          <p className="text-center text-white py-[25px]">
            © 2024 Любимые Рецепты. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};
