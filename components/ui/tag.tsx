import React from "react";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}
const sizeClasses = {
  sm: "px-6 py-2 text-xs md:text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-6 py-2 text-xs md:px-10 md:py-4 text-lg",
};

const Tag = ({ children, className = "", size = "sm" }: TagProps) => {
  return (
    <div
      className={`bg-transparent backdrop-blur-sm border border-white/30 rounded-full font-normal text-white inline-flex items-center gap-2 ${className} font-sora ${sizeClasses[size]}  `}
    >
      {children}
    </div>
  );
};

export default Tag;
