import BookListCard from './BookListCard';
import bookImage from './images/9781484212615.png';

function App() {
  return (
    <div className="content">
      <BookListCard author="anonymous" image={bookImage} />
    </div>
  );
}

export default App;
