import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import {
  selectRecommend,
  selectNewDisney,
  selectOriginal,
  selectTrending,
} from "../features/movie/movieSlice";

function Movies() {
  return (
    <Container>
      <MoviesList title="Recommended" movies={useSelector(selectRecommend)} />
      <MoviesList title="New" movies={useSelector(selectNewDisney)} />
      <MoviesList title="Originals" movies={useSelector(selectOriginal)} />
      <MoviesList title="Trending" movies={useSelector(selectTrending)} />
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  padding 10px 0px;
  margin-bottom: 30px;
`;
