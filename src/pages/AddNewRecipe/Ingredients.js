import React, { useState } from "react";

export const Ingredients = ({ setValues, values }) => {
  const [value, setValue] = useState("");
  const [inputClose, setInputClose] = useState(true);

  function handleAdd() {
    if (value) {
      setValues({ ...values, ingredients: [...values.ingredients, value] });
      setInputClose(false);
      setValue("");
    }
    return;
  }

  function onKeyEnterAdd(e) {
    if (e.key === "Enter") {
      handleAdd();
    }
  }

  function del(idx) {
    if (window.confirm("Удалить")) {
      setValues({
        ...values,
        ingredients: values.ingredients.filter((el, ind) => ind !== idx),
      });
      setInputClose(true);
    }
    return;
  }

  return (
    <div>
      <h2 className="text-[30px] text-[#FF9A31] font-semibold max-[540px]:text-[28px] mt-[50px] mb-[20px]">
        Ингредиенты:
      </h2>
      <div>
        {values.ingredients.map((ingred, idx) => (
          <div
            className="relative border-[2px] border-[#757575] rounded-[8px] text-[22px] py-[8px] px-[20px] w-[100%] gap-[8px] mb-[10px]"
            key={idx}
          >
            <h2>{ingred}</h2>
            <span
              onClick={() => del(idx)}
              className="absolute right-5 top-[15%] text-[55px] leading-6 cursor-pointer"
            >
              -
            </span>
          </div>
        ))}
        <div
          style={{
            display: inputClose ? "" : "none",
          }}
          className="relative"
        >
          <input
            onChange={(e) => setValue(e.target.value)}
            className="border-[2px] border-[#757575] rounded-[8px] text-[22px] py-[8px] px-[20px] w-[100%] gap-[8px] mb-[10px]"
            type="text"
            placeholder="Довабить ингредиент"
            value={value}
            onKeyDown={onKeyEnterAdd}
          />

          <span
            onClick={handleAdd}
            className="absolute right-5 top-[18%] text-[40px] leading-6 cursor-pointer"
          >
            +
          </span>
        </div>
      </div>
      <h2
        onClick={() => setInputClose(true)}
        className="text-[24px] text-[#000] font-semibold max-[540px]:text-[20px] mb-[20px] cursor-pointer"
      >
        <span className="text-[30px] max-[540px]:text-[26px] mt-[50px] mb-[20px]">
          +
        </span>{" "}
        Добавить шапку
      </h2>
    </div>
  );
};
