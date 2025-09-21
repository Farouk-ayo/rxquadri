import React from "react";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

const Tag = ({ children, className = "" }: TagProps) => {
  return (
    <div
      className={`bg-transparent backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-normal text-white inline-flex items-center gap-2 ${className} font-sora`}
    >
      {children}
    </div>
  );
};

export default Tag;
