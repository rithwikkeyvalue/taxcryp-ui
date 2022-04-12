import React from "react";

type ButtonProps ={
  className?: string,
  children: React.ReactNode,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  onClick,
  children,
  disabled = false
}) => {
  return (
    <button
      type="button"
      className={`bg-slate-300 px-5 py-3 rounded hover:bg-slate-400 text-base ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
