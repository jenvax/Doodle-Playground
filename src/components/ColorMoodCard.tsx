import type { ColorMood } from "../types";
import { CardShell } from "./CardShell";
import { ShuffleButton } from "./ShuffleButton";

interface ColorMoodCardProps {
  colorMood: ColorMood;
  onShuffle: () => void;
}

export const ColorMoodCard = ({ colorMood, onShuffle }: ColorMoodCardProps) => (
  <CardShell label="Color Mood" title={colorMood.name} action={<ShuffleButton onClick={onShuffle}>Shuffle Color Mood</ShuffleButton>}>
    <div className="swatch-row" aria-label={`${colorMood.name} color palette`}>
      {colorMood.colors.map((color) => (
        <span className="color-swatch" style={{ backgroundColor: color }} title={color} key={`${colorMood.id}-${color}`} />
      ))}
    </div>
  </CardShell>
);
