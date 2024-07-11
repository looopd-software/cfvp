import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  colorClassName?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ children, colorClassName = "bg-black text-white", type = "button", onClick, disabled = false }: ButtonProps) {
  return (
    <button
      type={type}
      className={`py-2 px-10 rounded-lg ${colorClassName} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
