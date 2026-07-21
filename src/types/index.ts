export type GridMode = "required" | "optional" | "none" | "built-in";

export interface Strategy {
  id: string;
  title: string;
  gridMode: GridMode;
  steps: string[];
}

export interface Grid {
  id: string;
  name: string;
  imagePath?: string;
  description: string;
}

export interface ColorMood {
  id: string;
  name: string;
  colors: string[];
  imagePath?: string;
}

export interface CreativeMood {
  id: string;
  name: string;
  description: string;
}

export interface Doodle {
  id: string;
  name: string;
  category: DoodleCategory;
  imagePath?: string;
}

export type DoodleCategory = "Geometric" | "Lines" | "Organic" | "Whimsical";

export interface WildCard {
  id: string;
  title: string;
  instruction: string;
}

export interface Recipe {
  strategy: Strategy;
  grid: Grid | null;
  colorMood: ColorMood;
  creativeMood: CreativeMood | null;
  doodles: Doodle[];
  wildCard: WildCard | null;
}
