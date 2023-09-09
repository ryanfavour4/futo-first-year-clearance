import React, { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  alt: string;
  width?: string;
  height?: string;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

const Img = ({ alt, src, className, width, height, onClick }: ImageProps) => {
  return (
    <img
      src={src}
      onClick={onClick}
      className={className}
      width={width || 200}
      height={height || 100}
      loading="lazy"
      decoding="async"
      alt={alt}
    />
  );
};

export default Img;
