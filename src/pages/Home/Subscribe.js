import React from "react";

export const Subscribe = () => {
  return (
    <section className="bg-[#8d7146c1] my-24">
      <div className="container">
        <form className="py-[60px] flex flex-col items-center">
          <h1 className="text-5xl text-[#380202] text-center max-[960px]:text-4xl">
            Давайте оставаться на связи!
          </h1>
          <h5 className="text-2xl max-w-[60%] text-center py-8 max-[960px]:text-xl max-[960px]:max-w-[80%] max-[570px]:text-lg">
            Подпишитесь на нашу рассылку, чтобы мы могли сообщать вам наши
            новости и предложения
          </h5>
          <div className="flex justify-center max-w-[840px] w-[100%] gap-[20px] max-[640px]:flex-col max-[640px]:items-center">
            <input
              className="w-[70%] h-[45px] px-[20px] rounded-lg text-[20px] max-[640px]:w-[80%] max-[580px]:w-[100%] max-[580px]:text-[18px]"
              type="email"
              placeholder="Напиши Cвой Email"
            />
            <button className="px-[20px] h-[45px] bg-[#714424] text-[20px] text-[#fff] rounded-lg">
              Подписаться
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
