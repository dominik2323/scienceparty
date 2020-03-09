import React, { ReactElement } from 'react';

interface Props {
  src: string;
  alt?: string;
  className?: string;
  handleClick?: () => void;
}

function Img({ src, alt, className, handleClick }: Props): ReactElement {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={() => handleClick}
    />
  );
}

export default Img;
