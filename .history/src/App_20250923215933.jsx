import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewBook from './components/NewBook';
import BookListCard from './components/BookListCard';
import data from './data/books.json';

function App() {
  const [books, setBooks] = useState(data);

  const removeBook = (isbn13) => {
    setBooks(books.filter((book) => book.isbn13 !== isbn13));
  };

  return (
    <div className="app">
      <section>
        <Header />
        <div className="content">
          <NewBook />
          <div className="books">
            {books.map((book, index) => (
              <BookListCard
                key={book.isbn13}
                {...book}
                onRemove={() => removeBook(book.isbn13)}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
