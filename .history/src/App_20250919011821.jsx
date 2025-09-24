import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <section className="content">
        <Header />
        <NewBook />
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
      </section>
      <Footer />
    </div>
  );
}

export default App;
