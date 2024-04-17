import React, { useEffect, useState } from "react";
import addRecipe from "../../assets/addRecipe.png";
import { useNavigate } from "react-router-dom";

export const AddMyRecipe = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");

  function saveConfirmation() {
    if (confirmation === "040601") {
      localStorage.setItem("open", JSON.stringify(confirmation));
      navigate("/add_new_recipe");
      setConfirmation("");
      setModal(false);
    } else if (confirmation.length > 6) {
      setError("Больше 6 значений");
      setConfirmation("");
    } else {
      setError("Неправильный код");
      setConfirmation("");
    }
  }

  function onKeyEnterConfirmation(e) {
    if (e.key === "Enter") {
      saveConfirmation();
    }
  }

  function navAdd() {
    if (JSON.parse(localStorage.getItem("open"))) {
      navigate("/add_new_recipe");
      setTimeout(() => {
        window.scroll(0, 0);
      }, 100);
    } else {
      setModal(true);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 4000);
  }, [error]);

  return (
    <section className="mt-[260px] pb-[40px] max-[720px]:mt-[100px] ">
      <div className="container">
        <div className="flex justify-around items-center gap-[20px] max-[720px]:flex-col">
          <img
            data-aos="fade-right"
            className="w-[30%] max-[1024px]:w-[40%] max-[720px]:w-[60%] max-[620px]:w-[80%]"
            src={addRecipe}
            alt=""
          />
          <div
            data-aos="fade-left"
            className="flex flex-col text-end items-end max-[720px]:items-center"
          >
            <h1 className="text-[60px] flex flex-col text-end leading-tight max-[1024px]:text-5xl max-[1024px]:font-semibold max-[720px]:text-center max-[620px]:text-4xl">
              Поделись Своим <span className="text-[#FF9A31]">Рецептом</span>
            </h1>
            <h6 className="text-[24px] max-w-[500px] my-[40px] max-[720px]:text-center max-[620px]:text-xl max-[620px]:my-[25px]">
              Поделись с своими самыми крутыми рецептами и получи отзыв
            </h6>
            <button
              onClick={navAdd}
              className="text-[20px] h-[40px] bg-[#714424] px-[16px] text-[#fff] flex items-center rounded-[10px]"
            >
              Создать новый рецепт
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: modal ? "" : "none",
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setModal(false);
          }
        }}
        className="fixed top-0 w-[100%] h-[100vh] bg-[#0000008b] z-[200] backdrop-blur-sm flex items-center justify-center"
      >
        <div className="bg-white p-[20px] rounded-lg">
          <h1 className="text-center text-[20px]">
            Пишите 6 значный <br />
            <span className="text-[#dd8741] font-bold">код потверждения</span>
            <br />
            <span>для добавления вашего рецепта</span>
          </h1>
          <input
            onChange={(e) => setConfirmation(e.target.value)}
            className="border-[2px] rounded-lg px-[10px] py-1 mt-5 w-[100%]"
            type="text"
            value={confirmation.slice(0, 6)}
            placeholder="Введите код..."
            onKeyDown={onKeyEnterConfirmation}
            style={{
              borderColor: error ? "red" : "",
            }}
          />
          <p className="text-[red] ml-2 text-[14px]">{error}</p>
          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={() => setModal(false)}
              className="py-[2px] px-[5px] bg-[#b42121] text-white rounded-md"
            >
              закрыть
            </button>
            <button
              onClick={saveConfirmation}
              className="py-[2px] px-[5px] bg-[#4f9af6] text-white rounded-md"
            >
              потвердить
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
