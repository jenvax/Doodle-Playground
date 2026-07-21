import type { WildCard } from "../types";
import { CardShell } from "./CardShell";
import { ShuffleButton } from "./ShuffleButton";

interface WildCardSectionProps {
  wildCard: WildCard | null;
  onDraw: () => void;
  onRemove: () => void;
}

export const WildCardSection = ({ wildCard, onDraw, onRemove }: WildCardSectionProps) => (
  <section className="wild-card-area" aria-labelledby="wild-card-heading">
    <div>
      <p className="section-label">Feeling brave?</p>
      <h2 id="wild-card-heading">{wildCard ? wildCard.title : "Draw a Wild Card"}</h2>
      <p>{wildCard ? wildCard.instruction : "Add one playful twist when your page is ready for a little surprise."}</p>
    </div>
    <div className="wild-actions">
      <ShuffleButton variant={wildCard ? "secondary" : "primary"} onClick={onDraw}>
        Draw a Wild Card
      </ShuffleButton>
      {wildCard ? (
        <ShuffleButton variant="quiet" onClick={onRemove}>
          Remove Wild Card
        </ShuffleButton>
      ) : null}
    </div>
  </section>
);
