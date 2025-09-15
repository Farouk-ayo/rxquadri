import React, { ReactElement } from "react";

interface ButtonProps {
  variant?: "filled" | "outline" | "link";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  children,
  onClick,
  className = "",
  disabled = false,
  size = "md",
  asChild = false,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const variants = {
    filled:
      "bg-custom-gradient text-white shadow-lg hover:shadow-xl hover:opacity-90",
    outline:
      "border-2 border-custom-yellow text-custom-gradient backdrop-blur-sm",
    link: "px-0 py-0 text-custom-gradient hover:text-custom-gradient relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-custom-yellow after:transition-all after:duration-300 hover:after:w-full",
  };

  if (asChild) {
    const child = React.Children.only(children) as ReactElement<{
      className?: string;
      onClick?: () => void;
      disabled?: boolean;
    }>;

    return React.cloneElement(child, {
      className: `${baseClasses} ${
        variant !== "link" ? sizeClasses[size] : ""
      } ${variants[variant]} ${className}`,
      onClick,
      disabled,
    });
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${
        variant !== "link" ? sizeClasses[size] : ""
      } ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
