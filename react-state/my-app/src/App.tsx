import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const imageSources = ['/download.jpeg', '/download1.jpeg'];

const imageCaptions = [
  'A Stunning View of the Landscape',
  'A Serene Evening with a Peaceful Lake',
];

const imageDescriptions = [
  `This landscape image captures the beauty of rolling hills and vibrant skies, offering a sense of freedom and adventure. The rich colors evoke warmth and tranquility, inviting the viewer to escape into nature.`,
  `This serene lake scene, with its calm waters reflecting the sunset, conveys a peaceful atmosphere. It reminds us to slow down, appreciate the quiet moments, and find peace in nature's beauty.`,
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image src={imageSources} />
      <Caption captions={imageCaptions} />
      <Description descriptions={imageDescriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
