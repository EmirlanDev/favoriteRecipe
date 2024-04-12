import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "./../../../components/Card";
import { OhterRecipes } from "./OhterRecipes";
import { useSelector } from "react-redux";
import { useRecipeContext } from "./../../../context/RecipeContext";

export const DetailPage = () => {
  const { id, detailId } = useParams();
  const [oneRecipe, setOneRecipe] = useState(null);
  const [similar, setSimirlar] = useState([]);
  const { recipes } = useSelector((s) => s);
  const { getRecipes } = useRecipeContext();
  useEffect(() => {
    getRecipes();
  }, []);

  function foundOneRecipe() {
    let oneRecipe = recipes.find((el) => el.id === detailId);
    setOneRecipe(oneRecipe);
  }

  function similarRecipeForCategory() {
    let similar = recipes.filter((el) =>
      oneRecipe
        ? el.category === oneRecipe.category && el.id !== oneRecipe.id
        : []
    );
    setSimirlar(similar);
  }

  useEffect(() => {
    foundOneRecipe();
    similarRecipeForCategory();
  }, [recipes]);

  const [imgIdx, setImgIdx] = useState(0);

  return (
    <section className="pt-[100px]">
      {oneRecipe ? (
        <div className="container">
          <h1 className="text-[32px] py-[30px]">{oneRecipe.title}</h1>
          <div className="flex gap-5 justify-between w-[100%] max-[890px]:flex-col">
            <div className="max-w-[824px] w-[100%]">
              <img
                className="w-[799px] h-[528px] rounded-[20px] max-[1025px]:h-[400px] max-[700px]:h-[350px] "
                src={oneRecipe.image ? oneRecipe.image[imgIdx] : ""}
                alt=""
              />
              <div
                id="img"
                className="flex gap-[30px] max-w-[800px] h-[230px] min-h-[166px] items-center overflow-x-scroll max-[540px]:gap-[15px]"
              >
                {oneRecipe.image.map((img, idx) => (
                  <div key={idx} className="relative">
                    <div
                      onClick={() => setImgIdx(idx)}
                      style={{
                        opacity: imgIdx === idx ? "0" : "1",
                      }}
                      className="absolute w-[100%] h-[100%] rounded-[8px] bg-[#0000007c] z-10"
                    ></div>
                    <img
                      style={{
                        height: imgIdx === idx ? "166px" : "",
                        width: imgIdx === idx ? "148px" : "",
                        border: imgIdx === idx ? "2px solid #FF9A31" : "",
                        boxShadow:
                          imgIdx === idx ? "0px 0px 17px 2px #00000087" : "",
                      }}
                      className="min-w-[132px] h-[160px] rounded-[8px]"
                      src={img}
                      alt="products"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-around w-[100%] max-[540px]:flex-col max-[540px]:items-center">
                <h3 className="text-[#FF9A31] text-[18px] max-[540px]:justify-center w-[33%] text-center flex flex-col justify-center px-[10px border-[#000]  max-[540px]:border-b-[2px]  max-[540px]:w-[100%]">
                  время подготовки{" "}
                  <span className="py-[10px] text-[#000] text-[20px]">
                    {`${oneRecipe.cookingTime.hour}час-${oneRecipe.cookingTime.minut}мин.`}
                  </span>
                </h3>
                <h3 className="text-[#FF9A31] text-[18px] w-[33%] text-center flex flex-col justify-center px-[10px] border-x-[2px] border-[#000] max-[540px]:border-none  max-[540px]:w-[100%]">
                  время приготовления{" "}
                  <span className="py-[10px] text-[#000] text-[20px]">
                    {`${oneRecipe.preparationTime.hour}час-${oneRecipe.preparationTime.minut}мин.`}
                  </span>
                </h3>
                <h3 className="text-[#FF9A31] text-[18px] w-[33%] text-center flex flex-col justify-center px-[10px] border-[#000]  max-[540px]:border-t-[2px]  max-[540px]:w-[100%]">
                  порция{" "}
                  <span className="py-[10px] text-[#000] text-[20px]">
                    {oneRecipe.serving} порций
                  </span>
                </h3>
              </div>
              <h4 className="text-[22px] py-[40px] max-[540px]:text-[18px] max-[540px]:leading-5">
                {oneRecipe.desciption}
              </h4>
              <div className="flex flex-col gap-4 pb-[50px]">
                <h2 className="text-[36px] text-[#FF9A31] font-semibold max-[540px]:text-[30px]">
                  Ингредиенты:
                </h2>
                {oneRecipe.ingredients.map((ingredient, idx) => (
                  <p key={idx} className="text-[22px] max-[540px]:text-[18px]">
                    {ingredient}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-4 pb-[80px] max-[890px]:pb-[20px]">
                <h2 className="text-[36px] text-[#FF9A31] font-semibold max-[540px]:text-[30px]">
                  Инструкция:
                </h2>
                {oneRecipe.instructions.map((instruction, idx) => (
                  <div
                    className="grid grid-cols-[25px_minmax(90%,_1fr)_100px] gap-4"
                    key={idx}
                  >
                    <div className="w-[25px] h-[25px] rounded bg-[#FF9A31] flex items-center justify-center text-[18px] text-white fon">
                      {idx + 1}
                    </div>
                    <p className="text-[22px] max-w-[635px]">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-[#D9D9D98F] rounded-[10px] pt-[30px] pb-[60px] px-[30px]">
                <h2 className="text-[26px] text-center text-[#FF9A31] mb-[25px] max-[1025px]:leading-7">
                  Информация о питательности продукта
                </h2>
                <div className="flex flex-col gap-8 max-[1025px]:gap-4">
                  <h5 className="flex justify-between gap-2 h-[20px]">
                    Калории{" "}
                    <span
                      style={{
                        flex: "1 0",
                      }}
                      className="border-b-[1px] border-[#747474] border-dashed"
                    ></span>{" "}
                    <span>{oneRecipe.nutrition.calories}</span>
                  </h5>
                  <h5 className="flex justify-between gap-2 h-[20px]">
                    Углеводы{" "}
                    <span
                      style={{
                        flex: "1 0",
                      }}
                      className="border-b-[1px] border-[#747474] border-dashed"
                    ></span>{" "}
                    <span>{oneRecipe.nutrition.carbohydrate}гр.</span>
                  </h5>
                  <h5 className="flex justify-between gap-2 h-[20px]">
                    Жир{" "}
                    <span
                      style={{
                        flex: "1 0",
                      }}
                      className="border-b-[1px] border-[#747474] border-dashed"
                    ></span>{" "}
                    <span>{oneRecipe.nutrition.grease}гр.</span>
                  </h5>
                  <h5 className="flex justify-between gap-2 h-[20px]">
                    Белок{" "}
                    <span
                      style={{
                        flex: "1 0",
                      }}
                      className="border-b-[1px] border-[#747474] border-dashed"
                    ></span>{" "}
                    <span>{oneRecipe.nutrition.protein}гр.</span>
                  </h5>
                  <h5 className="flex justify-between gap-2 h-[20px]">
                    Натрий{" "}
                    <span
                      style={{
                        flex: "1 0",
                      }}
                      className="border-b-[1px] border-[#747474] border-dashed"
                    ></span>{" "}
                    <span>{oneRecipe.nutrition.sodium}гр.</span>
                  </h5>
                  <h5 className="flex justify-between gap-2 h-[20px]">
                    Чистые углеводы{" "}
                    <span
                      style={{
                        flex: "1 0",
                      }}
                      className="border-b-[1px] border-[#747474] border-dashed"
                    ></span>{" "}
                    <span>{oneRecipe.nutrition.cleanCarbohydrate}гр.</span>
                  </h5>
                </div>
              </div>
              {/* <div className="flex flex-col pb-[40px] w-[100%] items-end gap-10 max-[890px]:items-start">
                <h2
                  style={{
                    display: similar.length > 0 ? "" : "none",
                  }}
                  className="mt-10 text-[32px] text-[#FF9A31]"
                >
                  Другие рецепты
                </h2>
                <div className="max-w-[300px] w-[100%] grid gap-5 justify-between max-[890px]:max-w-[100vw] max-[890px]:grid-cols-[repeat(3,32%)] max-[755px]:grid-cols-[repeat(2,50%)]  max-[755px]:justify-center max-[620px]:grid-cols-[repeat(1,300px)]">
                  {similar.slice(0, 3).map((el, idx) => (
                    <Card key={idx} el={el} detailId={detailId} />
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <h1>...loading</h1>
      )}
    </section>
  );
};
