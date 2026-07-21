import { useEffect, useState } from "react";
import { colorMoods } from "../data/colorMoods";
import { creativeMoods } from "../data/creativeMoods";
import { strategies } from "../data/strategies";
import {
  addDoodle,
  drawWildCard,
  generateRecipe,
  getGridForStrategy,
  pickRandom,
  reshuffleDoodles,
  shouldUseGrid,
} from "../utils/random";
import { clearRecipe, loadRecipe, saveRecipe } from "../utils/storage";
import type { Doodle, Recipe } from "../types";

export const useRecipe = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(() => loadRecipe());

  useEffect(() => {
    if (recipe) {
      saveRecipe(recipe);
    }
  }, [recipe]);

  const shufflePage = () => setRecipe(generateRecipe());

  const startOver = () => {
    clearRecipe();
    setRecipe(null);
  };

  const updateRecipe = (updater: (recipe: Recipe) => Recipe) => {
    setRecipe((current) => (current ? updater(current) : current));
  };

  const shuffleStrategy = () => {
    updateRecipe((current) => {
      const strategy = pickRandom(strategies, current.strategy.id);
      const grid = getGridForStrategy(strategy, current.grid?.id);
      return { ...current, strategy, grid };
    });
  };

  const shuffleGrid = () => {
    updateRecipe((current) => {
      if (!shouldUseGrid(current.strategy.gridMode)) {
        return { ...current, grid: null };
      }

      return { ...current, grid: getGridForStrategy(current.strategy, current.grid?.id) };
    });
  };

  const removeGrid = () => {
    updateRecipe((current) => ({ ...current, grid: null }));
  };

  const shuffleColorMood = () => {
    updateRecipe((current) => ({ ...current, colorMood: pickRandom(colorMoods, current.colorMood.id) }));
  };

  const shuffleCreativeMood = () => {
    updateRecipe((current) => ({ ...current, creativeMood: pickRandom(creativeMoods, current.creativeMood?.id) }));
  };

  const removeCreativeMood = () => {
    updateRecipe((current) => ({ ...current, creativeMood: null }));
  };

  const shuffleDoodleSet = () => {
    updateRecipe((current) => ({ ...current, doodles: reshuffleDoodles() }));
  };

  const addAnotherDoodle = () => {
    updateRecipe((current) => ({ ...current, doodles: addDoodle(current.doodles) }));
  };

  const removeDoodle = (doodleId: Doodle["id"]) => {
    updateRecipe((current) => {
      if (current.doodles.length <= 1) {
        return current;
      }

      return { ...current, doodles: current.doodles.filter((doodle) => doodle.id !== doodleId) };
    });
  };

  const drawNewWildCard = () => {
    updateRecipe((current) => ({ ...current, wildCard: drawWildCard(current.wildCard?.id) }));
  };

  const removeWildCard = () => {
    updateRecipe((current) => ({ ...current, wildCard: null }));
  };

  return {
    recipe,
    shufflePage,
    startOver,
    shuffleStrategy,
    shuffleGrid,
    removeGrid,
    shuffleColorMood,
    shuffleCreativeMood,
    removeCreativeMood,
    shuffleDoodleSet,
    addAnotherDoodle,
    removeDoodle,
    drawNewWildCard,
    removeWildCard,
  };
};
