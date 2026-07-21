import type { Recipe } from "../types";
import { ColorMoodCard } from "./ColorMoodCard";
import { CreativeMoodCard } from "./CreativeMoodCard";
import { DoodleCollection } from "./DoodleCollection";
import { GridCard } from "./GridCard";
import { StrategyCard } from "./StrategyCard";
import { WildCardSection } from "./WildCardSection";

interface BuilderResultsProps {
  recipe: Recipe;
  shuffleStrategy: () => void;
  shuffleGrid: () => void;
  removeGrid: () => void;
  shuffleColorMood: () => void;
  shuffleCreativeMood: () => void;
  removeCreativeMood: () => void;
  shuffleDoodleSet: () => void;
  addAnotherDoodle: () => void;
  removeDoodle: (doodleId: string) => void;
  drawNewWildCard: () => void;
  removeWildCard: () => void;
}

export const BuilderResults = ({
  recipe,
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
}: BuilderResultsProps) => (
  <div className="results-stack">
    <StrategyCard strategy={recipe.strategy} onShuffle={shuffleStrategy} />
    <div className="support-grid">
      <GridCard strategy={recipe.strategy} grid={recipe.grid} onShuffle={shuffleGrid} onRemove={removeGrid} />
      <ColorMoodCard colorMood={recipe.colorMood} onShuffle={shuffleColorMood} />
      <CreativeMoodCard creativeMood={recipe.creativeMood} onShuffle={shuffleCreativeMood} onRemove={removeCreativeMood} />
    </div>
    <DoodleCollection
      doodles={recipe.doodles}
      onShuffle={shuffleDoodleSet}
      onAdd={addAnotherDoodle}
      onRemove={removeDoodle}
    />
    <WildCardSection wildCard={recipe.wildCard} onDraw={drawNewWildCard} onRemove={removeWildCard} />
  </div>
);
