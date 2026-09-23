import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "cj-button--primary",
  secondary: "cj-button--secondary",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const classes = [
    "rounded-md px-4 py-2 text-sm font-medium transition-colors",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <button className={classes} {...props} />;
}
