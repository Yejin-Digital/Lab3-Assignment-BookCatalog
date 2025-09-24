import Header from './components/Header';
import Footer from './components/Footer';
import NewBook from './components/NewBook';

function App() {
  return (
    <div className="app">
      <section>
        <div classNAme="content">
          <Header />
          <NewBook />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
