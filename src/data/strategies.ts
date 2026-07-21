import type { Strategy } from "../types";

export const strategies: Strategy[] = [
  {
    id: "big-blocks-lots-of-doodles",
    title: "Big Blocks & Lots of Doodles",
    gridMode: "required",
    steps: [
      "Draw a random grid with large spaces.",
      "Fill each space with color.",
      "Randomly pick 3 or more doodles to fill it in.",
    ],
  },
  {
    id: "mini-grid-mischief",
    title: "Mini Grid Mischief",
    gridMode: "required",
    steps: [
      "Draw a random grid with small spaces.",
      "Add color to each space.",
      "Draw 3 or more different doodles across the grid.",
    ],
  },
  {
    id: "big-frame-one-star",
    title: "Big Frame, One Star",
    gridMode: "required",
    steps: [
      "Draw a random grid with large spaces.",
      "Fill them with color.",
      "Choose just one doodle to repeat throughout.",
    ],
  },
  {
    id: "color-first-then-divide-conquer",
    title: "Color First, Then Divide & Conquer",
    gridMode: "required",
    steps: [
      "Splash the whole page with color first.",
      "Draw a large random grid on top.",
      "Fill the sections with 3 or more doodles.",
    ],
  },
  {
    id: "mini-grid-color-riot",
    title: "Mini Grid Color Riot",
    gridMode: "required",
    steps: [
      "Cover the page in color.",
      "Draw a small, random grid on top.",
      "Fill with 3 or more doodles, one per space or as you like.",
    ],
  },
  {
    id: "color-calm",
    title: "Color & Calm",
    gridMode: "required",
    steps: [
      "Fill the page with soft or bold color.",
      "Add a large grid over it.",
      "Choose one doodle only to repeat throughout.",
    ],
  },
  {
    id: "doodle-before-you-color",
    title: "Doodle Before You Color",
    gridMode: "required",
    steps: [
      "Draw a large, random grid.",
      "Pick 3 or more doodles to fill it.",
      "Add color wherever you please.",
    ],
  },
  {
    id: "tiny-grid-big-energy",
    title: "Tiny Grid, Big Energy",
    gridMode: "required",
    steps: [
      "Draw a small grid.",
      "Fill with 3 or more doodles.",
      "Add color—inside, outside, or wildly around.",
    ],
  },
  {
    id: "one-doodle-one-world",
    title: "One Doodle, One World",
    gridMode: "required",
    steps: [
      "Draw a large, random grid.",
      "Choose just one doodle.",
      "Color it in however you like.",
    ],
  },
  {
    id: "color-cloud-free-doodles",
    title: "Color Cloud + Free Doodles",
    gridMode: "none",
    steps: [
      "Fill the entire page with color.",
      "Skip the grid!",
      "Draw 3 or more doodles freely across the page.",
    ],
  },
  {
    id: "painted-page-one-pattern",
    title: "Painted Page, One Pattern",
    gridMode: "none",
    steps: [
      "Fill your whole page with color first.",
      "Add just one doodle—let it wander freely.",
    ],
  },
  {
    id: "follow-the-color-map",
    title: "Follow the Color Map",
    gridMode: "built-in",
    steps: [
      "Fill the page with color.",
      "Trace the edges of the color areas to make a grid.",
      "Add 3 or more doodles into the shapes without a plan.",
    ],
  },
  {
    id: "the-floating-island",
    title: "The Floating Island",
    gridMode: "built-in",
    steps: [
      "Choose one shape: circle, blob, cloud, or anything you like.",
      "Place it somewhere on your page like an island.",
      "Fill only that shape with 3 or more doodles. Add color last.",
    ],
  },
  {
    id: "black-white-flip",
    title: "Black & White Flip",
    gridMode: "required",
    steps: [
      "Draw a large grid across your page.",
      "In half of the boxes, doodle with black ink.",
      "In the other half, fill the background with color or black, then doodle on top with a white pen or gel pen.",
    ],
  },
  {
    id: "one-color-many-marks",
    title: "One Color, Many Marks",
    gridMode: "optional",
    steps: [
      "Pick one color only.",
      "Use it to draw your grid, doodle your patterns, and add any extra marks.",
      "Try switching up the tools instead of the palette.",
    ],
  },
  {
    id: "reverse-it",
    title: "Reverse It",
    gridMode: "optional",
    steps: [
      "Start with 3 doodles scattered across the page.",
      "Then build a grid or color around them.",
      "Let the page grow backward.",
    ],
  },
  {
    id: "shape-sorter",
    title: "Shape Sorter",
    gridMode: "built-in",
    steps: [
      "Draw 4–6 different shapes across the page.",
      "Assign one doodle to each shape.",
      "Color comes last, inside or outside the lines.",
    ],
  },
  {
    id: "the-echo-page",
    title: "The Echo Page",
    gridMode: "built-in",
    steps: [
      "Pick one doodle.",
      "Draw it once big, once medium, and many times tiny, like an echo fading away.",
      "Add a soft color wash behind it.",
    ],
  },
  {
    id: "double-trouble-grid",
    title: "Double Trouble Grid",
    gridMode: "required",
    steps: [
      "Draw a small grid and fill each space with color.",
      "Overlay a large, loose grid on top.",
      "Fill the second grid with doodles. Let the lines intersect and play.",
    ],
  },
  {
    id: "color-layer-shuffle",
    title: "Color Layer Shuffle",
    gridMode: "required",
    steps: [
      "Start with a small grid and color each space.",
      "Overlay a second random grid.",
      "Add transparent or soft color washes into the new shapes for layered depth.",
    ],
  },
  {
    id: "big-doodle-takeover",
    title: "Big Doodle Takeover",
    gridMode: "required",
    steps: [
      "Draw a small grid and fill each space with color.",
      "Draw one large doodle or image across the entire page, right on top.",
      "Fill the larger shape with doodles and let it reclaim the space.",
    ],
  },
  {
    id: "doodle-flood",
    title: "Doodle Flood",
    gridMode: "none",
    steps: [
      "Fill the whole page with random or themed doodles—no grid, just doodle chaos.",
      "Add color over everything.",
      "Go back and fill your shapes and spaces with smaller, layered doodles.",
    ],
  },
  {
    id: "spiral-builder",
    title: "Spiral Builder",
    gridMode: "built-in",
    steps: [
      "Draw a large spiral or concentric circles.",
      "Segment it into pie-like shapes or bands.",
      "Choose 3–5 doodles and rotate through them as you fill the spiral. Add color last.",
    ],
  },
  {
    id: "zoom-in-repeat",
    title: "Zoom In & Repeat",
    gridMode: "built-in",
    steps: [
      "Draw one doodle large in the center.",
      "Repeat that same doodle in various sizes all around the page—zoomed in, zoomed out, overlapping, and hiding.",
      "Add color only to the background.",
    ],
  },
  {
    id: "frame-it-twice",
    title: "Frame It Twice",
    gridMode: "built-in",
    steps: [
      "Draw a frame inside your page, then another smaller one inside it, like a double mat.",
      "Use the outer border for dense doodles.",
      "Use the inner box for calm space, a focal doodle, or text.",
      "Add soft color throughout.",
    ],
  },
];
