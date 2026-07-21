import type { Doodle } from "../types";
import { ShuffleButton } from "./ShuffleButton";
import { VisualPlaceholder } from "./VisualPlaceholder";

interface DoodleCardProps {
  doodle: Doodle;
  canRemove: boolean;
  onRemove: (doodleId: string) => void;
}

export const DoodleCard = ({ doodle, canRemove, onRemove }: DoodleCardProps) => (
  <article className="doodle-card">
    <VisualPlaceholder label={doodle.name} imagePath={doodle.imagePath} variant="doodle" />
    <div>
      <p className="doodle-category">{doodle.category}</p>
      <h3>{doodle.name}</h3>
    </div>
    <ShuffleButton variant="quiet" onClick={() => onRemove(doodle.id)} disabled={!canRemove} aria-label={`Remove ${doodle.name}`}>
      Remove a Doodle
    </ShuffleButton>
  </article>
);
