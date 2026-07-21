import type { ReactNode } from "react";

interface CardShellProps {
  label: string;
  title: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}

export const CardShell = ({ label, title, children, action, className = "" }: CardShellProps) => (
  <section className={`card-shell ${className}`.trim()} aria-labelledby={`${label.replace(/\s+/g, "-").toLowerCase()}-heading`}>
    <div className="card-heading">
      <div>
        <p className="section-label">{label}</p>
        <h2 id={`${label.replace(/\s+/g, "-").toLowerCase()}-heading`}>{title}</h2>
      </div>
      {action ? <div className="card-action">{action}</div> : null}
    </div>
    {children}
  </section>
);
