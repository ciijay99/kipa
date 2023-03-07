import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Discover from './pages/Discover';
import Publication from './pages/Publication';
import Contact from './pages/Contact';
import Portal from './pages/Portal';
import Board from './pages/People/Board';
import Management from './pages/People/Management';
import NotFound from './pages/notFound/NotFound';
import People from './pages/People/People';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            exact
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/board'
            element={<Board />}
          />
          <Route
            path='/management'
            element={<Management />}
          />
          <Route
            path='/discover'
            element={<Discover />}
          />
          <Route
            path='/publication'
            element={<Publication />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/portal'
            element={<Portal />}
          />
          <Route
            path='/people'
            element={<People />}
          />
          <Route
            exact
            path='src/assets/pdfs/:filename.pdf'
            component={Publication}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
        <Footer />
        <ScrollToTop />
      </Router>
    </>
  );
};

export default App;
