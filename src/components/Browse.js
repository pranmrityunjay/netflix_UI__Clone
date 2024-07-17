import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovie } from "../hooks/usePopularMovie";
import GPTSearch from "./GPTSearch";
import GPTContext from "../utils/createContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import { useParams } from "react-router-dom";
import DetailCard from "./DetailCard";

const Browse = () => {
  const contextValue = useContext(GPTContext);
  const isGPT = useSelector((store) => store?.GPT?.isGPT);
  const isView = useSelector((store) => store.view.isView);
  
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();

  return (
    <div>
      {isView ? (
        <>
          <Header />
          <DetailCard/>

        </>
      ) : (
        <>
          <Header />
          {isGPT ? (
            <GPTSearch />
          ) : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Browse;
