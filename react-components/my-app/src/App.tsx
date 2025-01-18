import Button from './Button';
import Caption from './Caption';
import Description from './Description';
import Header from './Header';
import Image from './Image';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        marginLeft: '200px',
        maxWidth: '800px',
        width: '100%',
      }}>
      <Header />
      <Image />
      <Caption />
      <Description />
      <Button />
    </div>
  );
}

export default App;
