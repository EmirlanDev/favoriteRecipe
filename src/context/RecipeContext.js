import axios from "axios";
import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionType } from "./../redux/actionType";

const recipeContext = createContext();
export const useRecipeContext = () => useContext(recipeContext);

export const RecipeContext = ({ children }) => {
  const API = "https://660db7bb6ddfa2943b3516f4.mockapi.io/food/recipe";
  const dispatch = useDispatch();
  const { user } = useSelector((s) => s);

  async function createNewRecipe(value) {
    await axios.post(API, value);
  }

  async function getRecipes() {
    let { data } = await axios(API);
    dispatch({ type: actionType.GET_RECIPE, payload: data });
  }

  async function delRecipe(id) {
    await axios.delete(`${API}/${id}`);
    getRecipes();
  }

  async function getOneRecipe(id) {
    let { data } = await axios(`${API}/${id}`);
    dispatch({ type: actionType.ONE_RECIPE, payload: data });
  }

  async function editRecipe(id, values) {
    await axios.put(`${API}/${id}`, values);
    getRecipes();
  }

  async function addLike(id) {
    let { data } = await axios(`${API}/${id}`);
    let check = data.like.some((email) => email === user.email);
    if (check) {
      let findedEmail = data.like.find((email) => email === user.email);
      let idxEmail = data.like.indexOf(findedEmail);
      data.like.splice(idxEmail, 1);
      await axios.put(`${API}/${id}`, data);
      return;
    } else {
      data.like.push(user.email);
      await axios.put(`${API}/${id}`, data);
    }
    console.log(data);
  }

  const values = {
    createNewRecipe,
    getRecipes,
    delRecipe,
    addLike,
    getOneRecipe,
    editRecipe,
  };
  return (
    <recipeContext.Provider value={values}>{children}</recipeContext.Provider>
  );
};
