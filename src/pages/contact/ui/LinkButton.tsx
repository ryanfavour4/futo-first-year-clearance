import React, { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  to: string;
}

const LinkButton: React.FC<AnchorProps> = ({
  className = "",
  children,
  to,
  ...props
}) => {
  return (
    <Link
      to={to}
      className={`${className} text-center inline-flex items-center justify-center p-2 px-4 rounded-lg gap-2 hover:opacity-80 hover:gap-3 text-light font-semibold bg-green hover:bg-green/75 min-w-[100px]`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
