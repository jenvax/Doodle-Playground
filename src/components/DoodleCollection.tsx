import type { Doodle } from "../types";
import { CardShell } from "./CardShell";
import { DoodleCard } from "./DoodleCard";
import { ShuffleButton } from "./ShuffleButton";

interface DoodleCollectionProps {
  doodles: Doodle[];
  onShuffle: () => void;
  onAdd: () => void;
  onRemove: (doodleId: string) => void;
}

export const DoodleCollection = ({ doodles, onShuffle, onAdd, onRemove }: DoodleCollectionProps) => (
  <CardShell
    label="Gather Your Doodles"
    title="Pick at least 3 doodles to play with."
    className="doodle-section"
    action={<ShuffleButton onClick={onShuffle}>Shuffle Doodles</ShuffleButton>}
  >
    {doodles.length < 3 ? <p className="gentle-note">Your strategy works best with at least 3 doodles.</p> : null}
    <div className="doodle-grid">
      {doodles.map((doodle) => (
        <DoodleCard key={doodle.id} doodle={doodle} canRemove={doodles.length > 1} onRemove={onRemove} />
      ))}
    </div>
    <ShuffleButton variant="secondary" onClick={onAdd}>
      Add Another Doodle
    </ShuffleButton>
  </CardShell>
);
