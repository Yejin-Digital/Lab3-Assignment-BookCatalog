import Header from './components/Header';
import Footer from './components/Footer';
import NewBook from './components/NewBook';
import BookListCard from './components/BookListCard';
import data from './data/books.json';

function renderProduct(product) {
  return <BookListCard {...data} />;
}

function App() {
  return (
    <div className="app">
      <section>
        <Header />
        <div className="content">
          <NewBook />
          <BookListCard />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
