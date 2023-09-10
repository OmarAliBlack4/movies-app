import axios from 'axios';
import './App.css';
import MoviesList from './components/MoviesList';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MoviesDetiles';

function App() {
  //put all data on state
  const [movies, setMovies] = useState([]);
  const [pageCount , setPageCount] = useState(0);

  const apiKey = '52ef927bbeb21980cd91386a29403c78';

  //get all data
  const getAllMovies = async () => {
    // try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);

    // } catch (error) {
    //   console.error('Error fetching movies:', error);
    // }
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
      setPageCount(fillterRes.data.total_pages);
    }
  };

  //pagination 
  const paginationBar = async (pageNum) =>{
    const paginationRes = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en&page=${pageNum}`
    );
    setMovies(paginationRes.data.results);
    setPageCount(paginationRes.data.total_pages);
    
  }
  useEffect(() => {
    getAllMovies();
  }, []);
  


  return (
    <div className="App">
      <NavBar search={search} />
      <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviesList movies={movies} paginationBar={paginationBar} pageCount={pageCount}/>}/>
          <Route path='/movie/:id' element={<MovieDetails/>}/>
        </Routes>
      </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
