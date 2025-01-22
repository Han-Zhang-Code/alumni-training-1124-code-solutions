import { useState } from 'react';

type Props = {
  descriptions: string[];
};
export function Description({ descriptions }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDescriptionClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
  };

  return (
    <p onClick={handleDescriptionClick} style={{ cursor: 'pointer' }}>
      {descriptions[currentIndex]}
    </p>
  );
}
