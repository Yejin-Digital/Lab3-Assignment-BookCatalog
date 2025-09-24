import Header from './components/Header';
import Footer from './components/Footer';
import NewBook from './components/NewBook';
import BookListCard from './components/BookListCard';
import data from './data/books.json';

function renderProduct(data) {
  return <BookListCard {...data} />;
}

function App() {
  return (
    <div className="app">
      <section>
        <Header />
        <div className="content">
          <NewBook />
          <div className="books">{data.map(renderProduct)}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
