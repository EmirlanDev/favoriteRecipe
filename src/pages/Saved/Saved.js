import React, { useEffect } from "react";
import { Card } from "./../../components/Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const Saved = () => {
  const { save } = useSelector((s) => s);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="pt-[100px] max-[720px]:pt-[80px]">
      <div className="container">
        {save.length > 0 ? (
          <div>
            <h1 className="text-6xl my-6 max-[600px]:text-5xl">Сохранненые</h1>
            <div className="popular">
              {save.map((el, idx) => (
                <Card key={idx} el={el} />
              ))}
            </div>
          </div>
        ) : (
          <section>
            <div className="container">
              <div className="flex items-center justify-center h-[85vh] flex-col gap-2">
                <h1 data-aos="fade-down" className="text-[32px] font-semibold">
                  Нету сохранненых рецептов
                </h1>
                <p data-aos="zoom-in" className="max-w-[500px] text-center">
                  Скорее к рецептом, там много вкусных рецептов, которые вам
                  обязательно понравятся!
                </p>
                <button
                  data-aos="fade-up"
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      window.scroll(0, 0);
                    }, 100);
                  }}
                  className="bg-[#ff9a31] w-[260px] h-[40px] text-[#fff] rounded-[10px] mt-[10px]"
                >
                  Перейти к рецептом
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};
