import Header from './components/Header';
import Footer from './components/Footer';
import NewBook from './components/NewBook';
import BookListCard from './components/BookListCard';
import data from './data/books.json';

function renderProduct(data) {
  return <BookListCard {...data} />;
}

const removeCardBtn = document.getElementById('removeCardBtn');
const bookCard = document.getElementById('bookCard');

removeCardBtn.addEventListener('click', function () {
  bookCard.parentNode.removeChild(bookCard);
});

function App() {
  return (
    <div className="app">
      <section>
        <Header />
        <div className="content">
          <NewBook />
          <div id="books">{data.map(renderProduct)}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
