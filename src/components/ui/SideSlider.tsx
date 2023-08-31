import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
  open: string;
  toggleToggleSlider?: () => void;
};

export default function SideSlider({
  children,
  open,
  toggleToggleSlider
}: Props) {
  return (
    <div
      onClick={toggleToggleSlider}
      className={`fixed bg-dark/40 overflow-y-scroll h-full top-0 right-0 z-10 duration-1000 ease-in-out ${open}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white min-h-full max-w-7xl duration-500 ml-auto"
      >
        {children}
      </div>
    </div>
  );
}

export const useSideSlider = () => {
  const [open, setOpen] = useState("w-0");

  const toggleToggleSlider = () => {
    setOpen(open === "w-0" ? "w-full" : "w-0");
  };

  return { open, toggleToggleSlider };
};
