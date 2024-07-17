import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,name}) => {
  return (
    <div className="px-6 ">
        
    <h1 className=' text-lg md:text-3xl py-4 text-white'>{name}</h1>

    <div className='flex overflow-x-scroll'>
    <div className='flex'>
        {movies?.map((temp) => (
          
    <MovieCard name={temp.title}key_id={temp.id} poster_path={temp.poster_path}  />
))}
    </div>
    </div>
    </div>
  )
}

export default MovieList