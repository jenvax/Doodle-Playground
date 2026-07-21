import type { Doodle, DoodleCategory } from "../types";

const makeId = (category: DoodleCategory, name: string) =>
  `${category.toLowerCase()}-${name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

const imagePaths: Partial<Record<string, string>> = {
  "geometric-3d-star": "/Doodles/Geometric/3d-star.png",
  "geometric-boxes": "/Doodles/Geometric/boxes.png",
  "geometric-bubble-yawn": "/Doodles/Geometric/bubble-yawn.png",
  "geometric-bullseye": "/Doodles/Geometric/bullseye.png",
  "geometric-checkers": "/Doodles/Geometric/checkers.png",
  "geometric-diner": "/Doodles/Geometric/diner.png",
  "geometric-echo-chamber": "/Doodles/Geometric/echo-chamber.png",
  "geometric-echo-x": "/Doodles/Geometric/echo-x.png",
  "geometric-eyelet-axis": "/Doodles/Geometric/eyelet-axis.png",
  "geometric-gem-net": "/Doodles/Geometric/gem-net.png",
  "geometric-lunar-links": "/Doodles/Geometric/lunar-links.png",
  "geometric-petal-points": "/Doodles/Geometric/petal-points.png",
  "geometric-quarter-turn": "/Doodles/Geometric/quarter-turn.png",
  "geometric-radiant-x": "/Doodles/Geometric/radiant-x.png",
  "geometric-ripple-nest": "/Doodles/Geometric/ripple-nest.png",
  "geometric-split-signal": "/Doodles/Geometric/split-signal.png",
};

const byCategory: Record<DoodleCategory, string[]> = {
  Geometric: [
    "Echo X",
    "Radiant X",
    "Split Signal",
    "Lunar Links",
    "Echo Chamber",
    "Bubble Yawn",
    "Ripple Nest",
    "Signal Shrine",
    "Eyelet Axis",
    "Petal Points",
    "Boxes",
    "Checkers",
    "Diner",
    "Bullseye",
    "Quarter Turn",
    "Gem Burst",
    "Gem Net",
    "3D Star",
  ],
  Lines: [
    "Aura",
    "Curved",
    "Scallops",
    "Layered Hills",
    "Wiggle Flow",
    "Straight Lines",
    "Diagonal",
    "Stripes",
    "Basket Weave",
    "Zig Zag",
    "Dashes",
    "Waves",
    "Grid",
  ],
  Organic: [
    "Daisy",
    "Petal Fan",
    "Pillow Bloom",
    "Swirls",
    "Pebbles",
    "Dots",
    "Organic",
    "Scribble",
    "Scallops",
    "Handwriting",
    "Loops",
    "Bubbles",
    "Wandering Vine",
    "Swirly Sprout",
    "Petal Splash",
    "Curly Vine",
    "Bead Vine",
    "Petal Bloom",
  ],
  Whimsical: [
    "Swirls",
    "Clouds",
    "Star",
    "Burst",
    "House",
    "City",
    "Flower",
    "Face",
    "Sparkle",
    "Rainbow",
    "Heart",
    "4-Petal Flower",
    "Sun",
    "Moon",
    "Dangles",
    "Stem Flower",
    "Word",
  ],
};

export const doodles: Doodle[] = Object.entries(byCategory).flatMap(([category, names]) =>
  names.map((name) => {
    const id = makeId(category as DoodleCategory, name);

    return {
      id,
      name,
      category: category as DoodleCategory,
      imagePath: imagePaths[id] ?? "",
    };
  }),
);
