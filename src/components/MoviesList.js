import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";

const MoviesList = ({ movies }) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1? ( movies.map((mov)=>{
        return(
          <CardMovie key={mov.id} mov={mov}/>
        )
      })) : <h2> No Data to show</h2>}
    </Row>
  );
};

export default MoviesList;
