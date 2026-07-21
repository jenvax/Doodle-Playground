import type { Grid, Strategy } from "../types";
import { gridMessage, shouldUseGrid } from "../utils/random";
import { CardShell } from "./CardShell";
import { ShuffleButton } from "./ShuffleButton";
import { VisualPlaceholder } from "./VisualPlaceholder";

interface GridCardProps {
  strategy: Strategy;
  grid: Grid | null;
  onShuffle: () => void;
  onRemove: () => void;
}

export const GridCard = ({ strategy, grid, onShuffle, onRemove }: GridCardProps) => {
  if (!shouldUseGrid(strategy.gridMode)) {
    return (
      <CardShell label="Grid" title={gridMessage(strategy)} className="quiet-card">
        <p className="muted-copy">Move straight into the strategy steps and let the page shape itself from there.</p>
      </CardShell>
    );
  }

  return (
    <CardShell
      label={strategy.gridMode === "optional" ? "Grid Optional" : "Grid"}
      title={grid?.name ?? "Choose your own grid"}
      action={<ShuffleButton onClick={onShuffle}>Shuffle Grid</ShuffleButton>}
    >
      {grid ? (
        <>
          <VisualPlaceholder label={grid.name} imagePath={grid.imagePath} />
          <p>{grid.description}</p>
          {strategy.gridMode === "optional" ? (
            <ShuffleButton variant="quiet" onClick={onRemove}>
              Remove Grid
            </ShuffleButton>
          ) : null}
        </>
      ) : (
        <>
          <p className="muted-copy">This strategy can work without a separate grid.</p>
          <ShuffleButton variant="quiet" onClick={onShuffle}>
            Add Grid
          </ShuffleButton>
        </>
      )}
    </CardShell>
  );
};
