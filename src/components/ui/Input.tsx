import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={`${className} bg-transparent border-2 border-gray-300 rounded-lg p-2 w-full outline-none`}
      {...props}
    />
  );
};

export default Input;
