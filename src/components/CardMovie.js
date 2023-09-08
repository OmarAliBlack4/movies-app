import React from "react";
import { Col } from "react-bootstrap";
const CardMovie = ({mov}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/`+ mov.poster_path} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>Name : {mov.original_title}</p>
              <p>Date : {mov.release_date}</p>
              <p>Rate : {mov.vote_average}</p>
              <p>Vote count : {mov.vote_count}</p>
            </div>
          </div>
        </div>
    </Col>
  );
};

export default CardMovie;
