import BookListCard from './BookListCard';
import image from './images/9781484212615.png';

function App() {
  return (
    <div>
      <BookListCard author="anonymous" image={image} />
    </div>
  );
}

export default App;
