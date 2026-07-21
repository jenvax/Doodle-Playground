import type { Strategy } from "../types";
import { CardShell } from "./CardShell";
import { ShuffleButton } from "./ShuffleButton";

interface StrategyCardProps {
  strategy: Strategy;
  onShuffle: () => void;
}

export const StrategyCard = ({ strategy, onShuffle }: StrategyCardProps) => (
  <CardShell
    label="Doodle Strategy"
    title={strategy.title}
    className="strategy-card"
    action={<ShuffleButton onClick={onShuffle}>Shuffle Strategy</ShuffleButton>}
  >
    <ol className="strategy-steps">
      {strategy.steps.map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ol>
  </CardShell>
);
