import { ShuffleButton } from "./ShuffleButton";

interface EmptyStateProps {
  onShuffle: () => void;
}

export const EmptyState = ({ onShuffle }: EmptyStateProps) => (
  <section className="empty-state" aria-labelledby="ready-heading">
    <div className="empty-doodles" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
    <p className="section-label">Ready to play?</p>
    <h2 id="ready-heading">Shuffle the decks and let Doodle Playground build your next page.</h2>
    <ShuffleButton variant="primary" onClick={onShuffle}>
      Shuffle My Page
    </ShuffleButton>
  </section>
);
