import React, { useState } from "react";
import { Images } from "./Images";
import { Ingredients } from "./Ingredients";
import { Nutrition } from "./Nutrition";
import { Instructions } from "./Instructions";
import { useRecipeContext } from "./../../context/RecipeContext";
import { useSelector } from "react-redux";
import { ImagesByURL } from "./ImagesByURL";
import { useNavigate } from "react-router-dom";

export const AddNew = () => {
  const { user } = useSelector((s) => s);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [values, setValues] = useState({
    user: {
      name: user ? user.displayName : "",
      image: user ? user.photoURL : "",
      email: user ? user.email : "",
    },
    title: "",
    image: [],
    nutrition: {
      calories: "",
      carbohydrate: "",
      protein: "",
      sodium: "",
      cleanCarbohydrate: "",
      grease: "",
    },
    desciption: "",
    ingredients: [],
    instructions: [],
    serving: 0,
    cookingTime: {
      hour: 0,
      minut: 0,
    },
    preparationTime: {
      hour: 0,
      minut: 0,
    },
    category: "",
    like: [],
  });

  const categories = [
    { title: "Рецепты завтраков", id: "breakfast" },
    { title: "Рецепты обеда", id: "lunch" },
    { title: "Рецепты ужина", id: "dinner" },
    { title: "Рецепты закусок", id: "snack" },
    { title: "Рецепты салатов", id: "salat" },
    { title: "Рецепты пиццы", id: "pizza" },
    { title: "Рецепты смузи", id: "smoothy" },
    { title: "Рецепты пасты", id: "pasta" },
  ];

  const { createNewRecipe } = useRecipeContext();

  function handleCreate() {
    try {
      if (
        values.title &&
        values.image &&
        values.ingredients &&
        values.instructions &&
        values.category
      ) {
        createNewRecipe(values);
        setValues({
          user: {
            name: "",
            image: "",
          },
          title: "",
          image: [],
          nutrition: {
            calories: "",
            carbohydrate: "",
            protein: "",
            sodium: "",
            cleanCarbohydrate: "",
            grease: "",
          },
          desciption: "",
          ingredients: [],
          instructions: [],
          serving: 0,
          cookingTime: {
            hour: 0,
            minut: 0,
          },
          preparationTime: {
            hour: 0,
            minut: 0,
          },
          category: "",
          like: [],
        });
        navigate("/");
        window.scroll(0, 0);
      } else {
        setError("Заполните поля!!!");
        return;
      }
    } catch (error) {
      setError("Заполните поля!!!");
    }
  }

  console.log(values);

  return (
    <section className="pt-[100px] max-[720px]:pt-[80px]">
      <div className="container">
        <div>
          <h1 className="text-[32px] py-[30px] border-b-[2px]">
            Создать рецепт
          </h1>
          <div className="mx-[auto] max-w-[590px] w-[100%]">
            <h2 className="text-[30px] text-[#FF9A31] font-semibold max-[540px]:text-[28px] mt-[50px] mb-[20px]">
              Название рецепта:
            </h2>
            <input
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              className="border-[2px] border-[#757575] rounded-[8px] text-[22px] py-[8px] px-[20px] w-[100%] gap-[8px]"
              type="text"
              placeholder="Добавить название"
              value={values.title}
            />
            <ImagesByURL setValues={setValues} values={values} />
            <Nutrition setValues={setValues} values={values} />
            <h2 className="text-[30px] text-[#FF9A31] font-semibold max-[540px]:text-[28px] mt-[50px] mb-[20px]">
              Описание:
            </h2>
            <textarea
              onChange={(e) =>
                setValues({ ...values, desciption: e.target.value })
              }
              className="border-[2px] border-[#757575] rounded-[8px] text-[22px] py-[8px] px-[20px] w-[100%] gap-[8px] max-h-[200px]"
              type="text"
              placeholder="Пре  дставь свой рецепт"
              value={values.desciption}
            ></textarea>
            <Ingredients setValues={setValues} values={values} />
            <Instructions setValues={setValues} values={values} />
            <h2 className="text-[30px] text-[#FF9A31] font-semibold max-[540px]:text-[28px] mt-[50px] mb-[20px]">
              Порция:
            </h2>
            <input
              onChange={(e) =>
                setValues({ ...values, serving: e.target.value })
              }
              className="border-[2px] border-[#757575] rounded-[8px] text-[22px] py-[8px] px-[20px] w-[100%] gap-[8px]"
              type="number"
              placeholder="#"
              value={values.serving === 0 ? "" : values.serving}
            />
            <h2 className="text-[30px] text-[#FF9A31] font-semibold max-[540px]:text-[28px] mt-[50px] mb-[20px]">
              Время приготовления:
            </h2>
            <div className="flex justify-between gap-2">
              <input
                onChange={(e) =>
                  setValues({
                    ...values,
                    cookingTime: {
                      ...values.cookingTime,
                      hour: +e.target.value,
                    },
                  })
                }
                className="border-[2px] border-[#757575] rounded-[8px] text-[22px] py-[8px] px-[20px] w-[50%] gap-[8px]"
                type="number"
                placeholder="Час 0"
                value={
                  values.cookingTime.hour === 0 ? "" : values.cookingTime.hour
                }
              />
              <input
                onChange={(e) =>
                  setValues({
                    ...values,
                    cookingTime: {
                      ...values.cookingTime,
                      minut: +e.target.value,
                    },
                  })
                }
                className="border-[2px] border-[#757575] rounded-[8px] text-[22px] py-[8px] px-[20px] w-[50%] gap-[8px]"
                type="number"
                placeholder="Минут 0"
                value={
                  values.cookingTime.minut === 0 ? "" : values.cookingTime.minut
                }
              />
            </div>
            <p>Сколько времени нужно, чтобы приготовить этот рецепт</p>
            <h2 className="text-[30px] text-[#FF9A31] font-semibold max-[540px]:text-[28px] mt-[50px] mb-[20px]">
              Время подготовки:
            </h2>
            <div className="flex justify-between gap-2">
              <input
                onChange={(e) =>
                  setValues({
                    ...values,
                    preparationTime: {
                      ...values.preparationTime,
                      hour: +e.target.value,
                    },
                  })
                }
                className="border-[2px] border-[#757575] rounded-[8px] text-[22px] py-[8px] px-[20px] w-[50%] gap-[8px]"
                type="number"
                placeholder="Час 0"
                value={
                  values.preparationTime.hour === 0
                    ? ""
                    : values.preparationTime.hour
                }
              />
              <input
                onChange={(e) =>
                  setValues({
                    ...values,
                    preparationTime: {
                      ...values.preparationTime,
                      minut: +e.target.value,
                    },
                  })
                }
                className="border-[2px] border-[#757575] rounded-[8px] text-[22px] py-[8px] px-[20px] w-[50%] gap-[8px]"
                type="number"
                placeholder="Минут 0"
                value={
                  values.preparationTime.minut === 0
                    ? ""
                    : values.preparationTime.minut
                }
              />
            </div>
            <p>Сколько времени нужно, чтобы приготовить этот рецепт</p>
            <h2 className="text-[30px] text-[#FF9A31] font-semibold max-[540px]:text-[28px] mt-[50px] mb-[20px]">
              Категории:
            </h2>
            <select
              onChange={(e) =>
                setValues({ ...values, category: e.target.value })
              }
              value={values.category}
              className="border-[2px] border-[#757575] rounded-[8px] text-[22px] py-[8px] px-[20px] w-[100%] gap-[8px flex items-center py-[40px]"
            >
              <option value="">Добавить котегории</option>
              {categories.map((el, idx) => (
                <option value={el.title} key={idx}>
                  {el.title}
                </option>
              ))}
            </select>
            <div className="py-[60px] flex justify-end flex-col items-end">
              <p className="mb-4 text-red-600 text-[20px]">{error}</p>
              <button
                onClick={handleCreate}
                className="py-[10px] px-[54px] text-[25px] bg-[#714424] rounded-xl text-cente text-white"
              >
                Создать
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
