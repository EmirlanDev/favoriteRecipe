import React from "react";
import food from "../../../assets/food.png";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const OhterRecipes = ({ el }) => {
  const like = false;
  const navigate = useNavigate();

  return (
    <div className="h-[300px] w-[200%] max-[890px]:w-[110%]">
      <img
        // onClick={() =>
        //   id ? navigate(`/categories/${id}/${1}`) : navigate(`/${1}`)
        // }
        className="h-[180px] w-[100%] rounded-t-[10px]"
        src={el.image}
        alt=""
      />
      <div className="px-[20px] w-[100%] border-[1.5px] border-t-[none] h-[120px] relative rounded-b-[8px]">
        <h2 className="mt-[10px] text-[18px]">{el.title}</h2>
        <div className="absolute bottom-0 pb-[20px] w-[85%] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="w-[35px] h-[35px] rounded-[50%]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_we7r5CWAZRO7KN7WjBPMnjp4hDlLIrVGYad4FRuh2g&s"
              alt="avatar"
            />
            <h3 className="text-[16px]">Emirlan Amangeldeiv</h3>
          </div>
          {like ? (
            <FaHeart className="text-[26px] w-[27px]" />
          ) : (
            <FaRegHeart className="text-[26px] w-[27px]" />
          )}
        </div>
      </div>
    </div>
  );
};
