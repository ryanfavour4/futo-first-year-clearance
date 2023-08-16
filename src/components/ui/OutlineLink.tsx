import React, { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  to: string;
}

const OutlineLink: React.FC<AnchorProps> = ({
  className = "",
  children,
  to,
  ...props
}) => {
  return (
    <Link
      to={to}
      className={`${className} text-center inline-flex items-center justify-center p-2 px-4 rounded-lg gap-2 hover:opacity-80 hover:gap-3 text-light font-semibold bg-transparent hover:bg-yellow/20 min-w-[100px] border-[3px] border-light hover:border-yellow hover:text-yellow`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default OutlineLink;
