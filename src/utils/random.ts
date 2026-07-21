import { colorMoods } from "../data/colorMoods";
import { creativeMoods } from "../data/creativeMoods";
import { doodles } from "../data/doodles";
import { grids } from "../data/grids";
import { strategies } from "../data/strategies";
import { wildCards } from "../data/wildCards";
import type { Doodle, Grid, GridMode, Recipe, Strategy } from "../types";

export const pickRandom = <T extends { id: string }>(items: T[], previousId?: string | null): T => {
  if (items.length === 0) {
    throw new Error("Cannot pick from an empty deck.");
  }

  const choices = previousId && items.length > 1 ? items.filter((item) => item.id !== previousId) : items;
  return choices[Math.floor(Math.random() * choices.length)];
};

export const shouldUseGrid = (gridMode: GridMode) => gridMode === "required" || gridMode === "optional";

export const gridMessage = (strategy: Strategy) => {
  if (strategy.gridMode === "none") {
    return "No grid needed for this strategy.";
  }

  if (strategy.gridMode === "built-in") {
    return "This strategy already includes its own framework.";
  }

  return "";
};

export const getGridForStrategy = (strategy: Strategy, previousGridId?: string | null): Grid | null => {
  if (!shouldUseGrid(strategy.gridMode)) {
    return null;
  }

  return pickRandom(grids, previousGridId);
};

export const pickDoodles = (count = 3, current: Doodle[] = []): Doodle[] => {
  const selected = [...current];
  const usedIds = new Set(selected.map((doodle) => doodle.id));
  const usedNames = new Set(selected.map((doodle) => doodle.name));

  while (selected.length < count && selected.length < doodles.length) {
    const avoidDuplicateNames = doodles.filter((doodle) => !usedIds.has(doodle.id) && !usedNames.has(doodle.name));
    const remaining = avoidDuplicateNames.length > 0 ? avoidDuplicateNames : doodles.filter((doodle) => !usedIds.has(doodle.id));
    const next = pickRandom(remaining);
    selected.push(next);
    usedIds.add(next.id);
    usedNames.add(next.name);
  }

  if (current.length === 0 && selected.length >= 3) {
    const categories = Array.from(new Set(selected.map((doodle) => doodle.category)));
    if (categories.length === 1) {
      const otherCategory = doodles.filter((doodle) => doodle.category !== selected[0].category && !usedNames.has(doodle.name));
      if (otherCategory.length > 0) {
        selected[2] = pickRandom(otherCategory);
      }
    }
  }

  return selected;
};

export const generateRecipe = (): Recipe => {
  const strategy = pickRandom(strategies);

  return {
    strategy,
    grid: getGridForStrategy(strategy),
    colorMood: pickRandom(colorMoods),
    creativeMood: Math.random() > 0.45 ? pickRandom(creativeMoods) : null,
    doodles: pickDoodles(3),
    wildCard: null,
  };
};

export const addDoodle = (current: Doodle[]) => pickDoodles(current.length + 1, current);

export const reshuffleDoodles = () => pickDoodles(3);

export const drawWildCard = (previousId?: string | null) => pickRandom(wildCards, previousId);
