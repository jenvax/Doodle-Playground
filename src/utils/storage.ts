import { colorMoods } from "../data/colorMoods";
import { creativeMoods } from "../data/creativeMoods";
import { doodles } from "../data/doodles";
import { grids } from "../data/grids";
import { strategies } from "../data/strategies";
import type { Recipe } from "../types";

const STORAGE_KEY = "doodle-playground-recipe";

const byId = <T extends { id: string }>(items: T[]) => new Map(items.map((item) => [item.id, item]));

const strategyById = byId(strategies);
const gridById = byId(grids);
const colorMoodById = byId(colorMoods);
const creativeMoodById = byId(creativeMoods);
const doodleById = byId(doodles);

const hydrateRecipe = (recipe: Recipe): Recipe => {
  const strategy = strategyById.get(recipe.strategy.id) ?? recipe.strategy;

  return {
    strategy,
    grid: recipe.grid ? (gridById.get(recipe.grid.id) ?? recipe.grid) : null,
    colorMood: colorMoodById.get(recipe.colorMood.id) ?? recipe.colorMood,
    creativeMood: recipe.creativeMood ? (creativeMoodById.get(recipe.creativeMood.id) ?? recipe.creativeMood) : null,
    doodles: recipe.doodles.map((doodle) => doodleById.get(doodle.id) ?? doodle),
    wildCard: recipe.wildCard,
  };
};

export const loadRecipe = (): Recipe | null => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? hydrateRecipe(JSON.parse(raw) as Recipe) : null;
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
