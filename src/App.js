import './App.css';
import MoviesList from './components/MoviesList';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MoviesDetiles';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviesList/>}/>
          <Route path='/movie/:id' element={<MovieDetails/>}/>
        </Routes>
      </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
