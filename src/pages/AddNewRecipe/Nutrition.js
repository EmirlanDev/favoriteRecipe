import React from "react";

export const Nutrition = ({ setValues, values }) => {
  return (
    <div className="my-[60px]">
      <h2 className="text-[30px] text-[#FF9A31] font-semibold max-[540px]:text-[28px] mt-[50px] mb-[20px] max-[445px]:text-center">
        Информация о питательности продукта
      </h2>
      <div className="flex justify-between gap-2 max-[600px]:flex-col max-[600px]:items-center">
        <div className="flex flex-col gap-2 w-[48%] max-[600px]:w-[70%] max-[445px]:w-[100%]">
          <div className="flex justify-between px-3 py-3 bg-[#D9D9D9] items-center h-[60px]">
            <h4 className="text-[#696969] text-[18px]">Калории</h4>
            <input
              onChange={(e) =>
                setValues({
                  ...values,
                  nutrition: { ...values.nutrition, calories: +e.target.value },
                })
              }
              className="max-w-[80px] h-[100%] rounded-[8px] px-2"
              type="number"
              placeholder="000"
              value={
                values.nutrition.calories === 0 ? "" : values.nutrition.calories
              }
            />
          </div>
          <div className="flex justify-between px-3 py-3 bg-[#D9D9D9] items-center h-[60px]">
            <h4 className="text-[#696969] text-[18px]">Углеводы</h4>
            <input
              onChange={(e) =>
                setValues({
                  ...values,
                  nutrition: {
                    ...values.nutrition,
                    carbohydrate: +e.target.value,
                  },
                })
              }
              className="max-w-[80px] h-[100%] rounded-[8px] px-2"
              type="number"
              placeholder="000 гр."
              value={
                values.nutrition.carbohydrate === 0
                  ? ""
                  : values.nutrition.carbohydrate
              }
            />
          </div>
          <div className="flex justify-between px-3 py-3 bg-[#D9D9D9] items-center h-[60px]">
            <h4 className="text-[#696969] text-[18px]">Белок</h4>
            <input
              onChange={(e) =>
                setValues({
                  ...values,
                  nutrition: {
                    ...values.nutrition,
                    protein: +e.target.value,
                  },
                })
              }
              className="max-w-[80px] h-[100%] rounded-[8px] px-2"
              type="number"
              placeholder="000 гр."
              value={
                values.nutrition.protein === 0 ? "" : values.nutrition.protein
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[48%] max-[600px]:w-[70%] max-[445px]:w-[100%]">
          <div className="flex justify-between px-3 py-3 bg-[#D9D9D9] items-center h-[60px]">
            <h4 className="text-[#696969] text-[18px]">Натрий</h4>
            <input
              onChange={(e) =>
                setValues({
                  ...values,
                  nutrition: {
                    ...values.nutrition,
                    sodium: +e.target.value,
                  },
                })
              }
              className="max-w-[80px] h-[100%] rounded-[8px] px-2"
              type="number"
              placeholder="000 гр."
              value={
                values.nutrition.sodium === 0 ? "" : values.nutrition.sodium
              }
            />
          </div>
          <div className="flex justify-between px-3 py-3 bg-[#D9D9D9] items-center h-[60px]">
            <h4 className="text-[#696969] text-[18px]">Чистые углеводы</h4>
            <input
              onChange={(e) =>
                setValues({
                  ...values,
                  nutrition: {
                    ...values.nutrition,
                    cleanCarbohydrate: +e.target.value,
                  },
                })
              }
              className="max-w-[80px] h-[100%] rounded-[8px] px-2"
              type="number"
              placeholder="000 гр."
              value={
                values.nutrition.cleanCarbohydrate === 0
                  ? ""
                  : values.nutrition.cleanCarbohydrate
              }
            />
          </div>
          <div className="flex justify-between px-3 py-3 bg-[#D9D9D9] items-center h-[60px]">
            <h4 className="text-[#696969] text-[18px]">Жир</h4>
            <input
              onChange={(e) =>
                setValues({
                  ...values,
                  nutrition: {
                    ...values.nutrition,
                    grease: +e.target.value,
                  },
                })
              }
              className="max-w-[80px] h-[100%] rounded-[8px] px-2"
              type="number"
              placeholder="000 гр."
              value={
                values.nutrition.grease === 0 ? "" : values.nutrition.grease
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
