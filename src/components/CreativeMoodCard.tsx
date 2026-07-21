import type { CreativeMood } from "../types";
import { CardShell } from "./CardShell";
import { ShuffleButton } from "./ShuffleButton";

interface CreativeMoodCardProps {
  creativeMood: CreativeMood | null;
  onShuffle: () => void;
  onRemove: () => void;
}

export const CreativeMoodCard = ({ creativeMood, onShuffle, onRemove }: CreativeMoodCardProps) => (
  <CardShell
    label="Mood Optional"
    title={creativeMood?.name ?? "Add a mood if you want one"}
    action={<ShuffleButton onClick={onShuffle}>Shuffle Mood</ShuffleButton>}
    className="optional-card"
  >
    <p>{creativeMood?.description ?? "A mood can nudge the feeling of the page without changing the whole recipe."}</p>
    {creativeMood ? (
      <ShuffleButton variant="quiet" onClick={onRemove}>
        Remove Mood
      </ShuffleButton>
    ) : null}
  </CardShell>
);
