import BookListCard from './BookListCard';
import bookImage from './images/9781484212615.png';

function App() {
  return (
    <div className="content">
      <BookListCard
        author="Cassio de Sousa Antonio"
        image={bookImage}
        link="https://itbook.store/books/9781484212615"
      />
    </div>
  );
}

export default App;
