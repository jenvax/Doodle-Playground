import type { Recipe } from "../types";

const STORAGE_KEY = "doodle-playground-recipe";

export const loadRecipe = (): Recipe | null => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Recipe) : null;
  } catch {
    return null;
  }
};

export const saveRecipe = (recipe: Recipe) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(recipe));
};

export const clearRecipe = () => {
  window.localStorage.removeItem(STORAGE_KEY);
};
