import React from 'react'
import MovieList from "./MovieList"
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovie);
    const PopularMovies=useSelector(store=>store.movies?.popularMovie);
    const topRatedMovie=useSelector(store=>store.movies?.topRatedMovie);
    const upcomingMovie=useSelector(store=>store.movies.popularMovie);
    
  return (
    <div className='bg-black'>
    <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList movies={movies} name={"Now Playing Movies"}/>
        <MovieList movies={topRatedMovie} name={"Top Rated Movies"}/>
        <MovieList movies={PopularMovies} name={"Popular Movies"}/>
        <MovieList movies={upcomingMovie} name={"Upcoming Movies"}/>
    </div>
    </div>
    
  )
}

export default SecondaryContainer