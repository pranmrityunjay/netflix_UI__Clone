import React from "react";
import { useSelector } from "react-redux";
import useMovieDetail from "../hooks/useMovieDetail";

const DetalCardPrimary = () => {
  useMovieDetail();
  const yKey = useSelector((store) => store.view.movieKey);
  return (
    <div className=" w-screen">
    <iframe
      className="w-screen aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        yKey +
        "?&autoplay=1&mute=1"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>
  );
};

export default DetalCardPrimary;
