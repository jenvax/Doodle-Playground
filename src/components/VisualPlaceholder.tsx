interface VisualPlaceholderProps {
  label: string;
  imagePath?: string;
  variant?: "grid" | "doodle";
}

export const VisualPlaceholder = ({ label, imagePath, variant = "grid" }: VisualPlaceholderProps) => {
  if (imagePath) {
    return <img className="visual-image" src={imagePath} alt="" aria-hidden="true" />;
  }

  return (
    <div className={`visual-placeholder visual-${variant}`} aria-hidden="true">
      <span>{label.slice(0, 1)}</span>
    </div>
  );
};
