import React from "react";
import foodHero from "../../assets/HeroFoodImg.png";
import imgHero from "../../assets/HeroImg.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Hero = () => {
  const navigate = useNavigate();
  const { user } = useSelector((s) => s);

  return (
    <section>
      <img
        className="absolute right-0 z-[-1] max-[1024px]:w-[700px]  max-[720px]:h-[90vh]"
        src={imgHero}
        alt=""
      />
      <div className="container">
        <div className="flex pt-[140px] pb-[35px] w-[100%] justify-between gap-10 items-center max-[720px]:flex-col-reverse max-[720px]:pt-[110px]">
          <div
            data-aos="fade-right"
            className="flex flex-col items-start max-[720px]:items-center"
          >
            <h1 className="text-[54px] font-semibold leading-tight max-[1024px]:text-5xl max-[960px]:text-4xl max-[820px]:text-3xl max-[720px]:text-4xl max-[720px]:text-center max-[640px]:text-3xl">
              Твое Ежедневное Блюдо- <br />
              <span className="text-[#FF9A31]">Гастрономическое</span>{" "}
              Путешествие
            </h1>
            <h5 className="my-[40px] text-[24px] max-[1024px]:text-base max-[720px]:my-[20px] max-[720px]:text-center">
              Самая вкусная еда обычно имеет маленький секрет… <br />в нее
              всегда добавляют щепотку любви.
            </h5>
            <button
              style={{
                display: user ? "none" : "",
              }}
              onClick={() => navigate("/sign_up")}
              className="text-[20px] h-[35px] bg-[#593b26] px-[16px] text-[#fff] flex items-center rounded-[10px]"
            >
              Регистрация
            </button>
            <h6
              style={{
                display: user ? "none" : "",
              }}
              className="mt-[8px] ml-[5px] text-[18px]"
            >
              у тебя есть аккаунт?{" "}
              <span
                onClick={() => navigate("/log_in")}
                className="text-[#FF9A31] cursor-pointer"
              >
                Войти
              </span>
            </h6>
          </div>
          <img
            data-aos="fade-left"
            className="w-[38%] max-[720px]:w-[50%]"
            src={foodHero}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
