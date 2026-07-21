import { ShuffleButton } from "./ShuffleButton";

interface FooterProps {
  hasRecipe: boolean;
  onStartOver: () => void;
}

export const Footer = ({ hasRecipe, onStartOver }: FooterProps) => (
  <footer className="site-footer">
    <p>There is no wrong way to doodle.</p>
    {hasRecipe ? (
      <ShuffleButton variant="quiet" onClick={onStartOver}>
        Start Over
      </ShuffleButton>
    ) : null}
  </footer>
);
