import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovie)
   if(!movies)return;
   const mainMovies=movies[0];
  return (
    <div className="pt-[30%] bg-black md:pt-0 ">
    <VideoTitle title={mainMovies.title} overview={mainMovies.overview}/>
    <VideoBackground movieID={mainMovies.id}/>
    </div>
  )
}

export default MainContainer