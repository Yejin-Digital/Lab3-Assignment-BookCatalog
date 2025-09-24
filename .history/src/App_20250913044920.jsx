import BookListCard from './BookListCard';
import bookImage from './images/9781484212615.png';
import bookImage2 from './images/9781492091196.png';

function App() {
  return (
    <div className="content">
      <BookListCard
        author="Cassio de Sousa Antonio"
        image={bookImage}
        link="https://itbook.store/books/9781484212615"
      />
      <BookListCard
        author="Prem Kumar Ponuthorai, Jon Loeliger"
        image={bookImage2}
        link="https://itbook.store/books/9781492091196"
      />
    </div>
  );
}

export default App;
