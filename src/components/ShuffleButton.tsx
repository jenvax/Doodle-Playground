import type { ButtonHTMLAttributes, ReactNode } from "react";

type ShuffleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet" | "danger";
};

export const ShuffleButton = ({ children, variant = "secondary", className = "", ...props }: ShuffleButtonProps) => (
  <button className={`button button-${variant} ${className}`.trim()} type="button" {...props}>
    {children}
  </button>
);
