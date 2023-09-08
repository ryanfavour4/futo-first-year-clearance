import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const OutlineButton: React.FC<ButtonProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      className={`${className} text-center inline-flex items-center justify-center p-2 rounded-lg gap-2 hover:opacity-80 hover:gap-3 text-light font-semibold bg-transparent hover:bg-sky-blue/20 min-w-[100px] border-[3px] border-light`}
      {...props}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
