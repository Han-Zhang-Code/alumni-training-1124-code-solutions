import { useState } from 'react';

type Props = {
  captions: string[];
};

export function Caption({ captions }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCaptionClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % captions.length);
  };

  return (
    <h3 onClick={handleCaptionClick} style={{ cursor: 'pointer' }}>
      {captions[currentIndex]}
    </h3>
  );
}
