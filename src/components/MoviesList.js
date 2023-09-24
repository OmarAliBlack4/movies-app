import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationMovies from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../Redux/actions/actionMovies";

const MoviesList = ({ paginationBar , pageCount}) => {

  const [movies, setMovies] = useState([]);


  const dispatch = useDispatch()
  const dataMovies = useSelector((state)=> state.initState)

  useEffect(() => {
    dispatch(getAllMovie())
  }, []);

  useEffect(() => {
    setMovies(dataMovies)
  }, [dataMovies]);

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? ( movies.map((mov)=>{
        return(
          <CardMovie key={mov.id} mov={mov}/>
        )
      })) : <h2>No Data to show </h2>}
      <PaginationMovies paginationBar={paginationBar} pageCount={pageCount}/>
    </Row>
  );
};

export default MoviesList;
