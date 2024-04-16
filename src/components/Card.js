import React from "react";
import { useNavigate } from "react-router-dom";
import saveImg from "../assets/save.svg";
import saveWhite from "../assets/saveWhite.svg";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToSave } from "./../redux/Reducer/ActionCreater";
import { useRecipeContext } from "./../context/RecipeContext";

export const Card = ({ el, id, detailId }) => {
  const navigate = useNavigate();
  const { user, save } = useSelector((s) => s);
  const dispatch = useDispatch();
  const { delRecipe } = useRecipeContext();

  let titled = el ? el.title.split(" ").slice(0, 6).join(" ") : "";

  return (
    <div
      className={`${detailId > 0 ? "h-[300px]" : "h-[370px]"} ${
        detailId > 0 ? "w-[200%]" : ""
      } max-[890px]:w-[100%]`}
    >
      <div className="relative">
        <img
          onClick={() => {
            id
              ? navigate(`/categories/${id}/${el ? el.id : 0}`)
              : navigate(`popular/${el ? el.id : 0}`);
            setTimeout(() => {
              window.scroll(0, 0);
            }, 100);
          }}
          className={`h-[222px] w-[100%] rounded-t-[10px] ${
            detailId > 0 ? "h-[175px]" : ""
          }`}
          src={el ? el.image[0] : ""}
          alt=""
        />
        <div
          onClick={() => dispatch(addToSave(el))}
          className="absolute top-5 right-5 p-2 bg-white rounded-[5px]"
          style={{
            display: user ? "" : "none",
          }}
        >
          {save.some((item) => item.id === el.id) ? (
            <img src={saveImg} alt="save" />
          ) : (
            <img src={saveWhite} alt="" />
          )}
        </div>
      </div>
      <div
        className={`px-[20px] border-[1.5px] border-t-[none] ${
          detailId > 0 ? "h-[125px]" : "h-[140px]"
        } relative rounded-b-[8px]`}
      >
        <h2
          className={`mt-[10px] ${
            detailId > 0 ? "text-[18px]" : "text-[22px]"
          }`}
        >
          {titled}
        </h2>
        <MdDelete
          onClick={() => delRecipe(el.id)}
          style={{
            display: user && user.displayName === el.user.name ? "" : "none",
          }}
          className="absolute right-8 top-5 text-[30px] text-[red]"
        />
        <div className="absolute bottom-0 pb-[20px] w-[85%] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {el && el.user.image ? (
              <img
                className="w-[35px] h-[35px] rounded-[50%]"
                src={el.user.image}
                alt="avatar"
              />
            ) : (
              <img
                className="w-[35px] h-[35px] rounded-[50%]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_we7r5CWAZRO7KN7WjBPMnjp4hDlLIrVGYad4FRuh2g&s"
                alt="avatar"
              />
            )}
            <h3 className={`${detailId > 0 ? "text-[16px]" : "text-[19px]"}`}>
              {el ? el.user.name : ""}
            </h3>
          </div>
          {/* {true ? (
            <FaHeart
              // onClick={() => addLike(el.id)}
              className="text-[26px] w-[27px] text-[red]"
            />
          ) : (
            <FaRegHeart
              // onClick={() => addLike(el.id)}
              className="text-[26px] w-[27px]"
            />
          )} */}
        </div>
      </div>
    </div>
  );
};
