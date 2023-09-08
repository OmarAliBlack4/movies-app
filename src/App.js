import axios from 'axios';
import './App.css';
import MoviesList from './components/MoviesList';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function App() {
  //put all data on state
  const [movies, setMovies] = useState([]);

  const apiKey = '52ef927bbeb21980cd91386a29403c78';
  //get all data
  const getAllMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en&page=1`
      );
      setMovies(res.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  //search bar
  const search = async (word) => {
    if(word === ""){
      getAllMovies()
    }else{
      const fillterRes = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${word}&language=en`
      );
      setMovies(fillterRes.data.results);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);
  


  return (
    <div className="App">
      <NavBar search={search} />
      <Container>
        <MoviesList movies={movies} />
      </Container>
    </div>
  );
}

export default App;
