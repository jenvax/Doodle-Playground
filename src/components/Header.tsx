import { ShuffleButton } from "./ShuffleButton";

interface HeaderProps {
  onShuffle: () => void;
  hasRecipe: boolean;
}

export const Header = ({ onShuffle, hasRecipe }: HeaderProps) => (
  <header className="site-header">
    <div className="brand-block">
      <p className="brand-kicker">Doodle Playground</p>
      <h1>Page Builder</h1>
      <p>Shuffle your way to a playful doodle page.</p>
    </div>
    <ShuffleButton variant="primary" onClick={onShuffle} aria-label={hasRecipe ? "Shuffle a new doodle page" : "Shuffle my page"}>
      Shuffle My Page
    </ShuffleButton>
  </header>
);
