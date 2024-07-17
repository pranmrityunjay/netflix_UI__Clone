import React from "react";
import useMovieInfo from "../hooks/useMovieInfo";
import { useSelector } from "react-redux";

const DetailCardSecondary = () => {
  useMovieInfo();
  const info = useSelector((store) => store.view.movieDetails);
  return (
    <div className="bg-black flex w-screen">
      <div className="m-2">
        <img
          className="rounded-sm w-[200px] h-[280px]"
          src={"https://image.tmdb.org/t/p/w200/" + info?.poster_path}
        ></img>
      </div>
      <div className="text-white text-3xl">
        <h1 className="pr-1">{info?.original_title}</h1>
        <span className="text-sm">Genres: </span>
        {info?.genres?.map((c) => (
          <span className="text-white text-sm">{c.name + " "}</span>
        ))}
        <h1 className="text-sm">Release date: {info?.release_date}</h1>
        <h1 className="text-sm">tagline: {info?.tagline}</h1>
      </div>
    </div>
  );
};

export default DetailCardSecondary;
