import Header from './components/Header';
import Footer from './components/Footer';
import NewBook from './components/NewBook';

function App() {
  return (
    <div className="app">
      <section className="content">
        <Header />
        <NewBook />
      </section>
      <Footer />
    </div>
  );
}

export default App;
