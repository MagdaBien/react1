import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favourite from './components/Favourite/Favourite';
import ErrorPage from './components/ErrorPage/ErrorPage';
import List from './components/List/List';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favourite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;