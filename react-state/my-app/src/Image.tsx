import { useState } from 'react';
import './Image.css';

type Props = {
  src: string[];
};

export function Image({ src }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % src.length);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50">
        <img
          className="image-fill"
          src={src[currentIndex]}
          alt={`image-${currentIndex}`}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
}
