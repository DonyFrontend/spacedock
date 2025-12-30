import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";

type LazyImageProps = {
  src: string;
  alt?: string;
  height?: string | number;
  width?: string | number;
  className?: string;
};

const LazyImage = ({ src, alt, height, width, className }: LazyImageProps) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      height={height}
      width={width}
      loading="lazy"
      effect="blur"
      className={className}
    />
  );
};

export default React.memo(LazyImage);
