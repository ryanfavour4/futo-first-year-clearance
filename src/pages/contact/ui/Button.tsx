import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      className={`${className} text-center disabled:opacity-50 disabled:pointer-events-none disabled:cursor-progress inline-flex items-center justify-center p-2 px-4 rounded-lg gap-2 hover:opacity-80 hover:gap-3 text-light font-semibold bg-green hover:bg-green/75 min-w-[100px]`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
