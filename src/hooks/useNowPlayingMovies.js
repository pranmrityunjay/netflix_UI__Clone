import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {API_Option}  from '../utils/constants';
import { addNowplayingMovie } from '../utils/moviesSlice';
import { useEffect } from 'react';

export const useNowPlayingMovies = () => {
const dispatch=useDispatch();
const isNowPlayingPresent=useSelector((store)=>store.movies.nowPlayingMovie)
  const fetchNowPlayingMovies=async ()=>{
    const responce=await fetch ("https://api.themoviedb.org/3/movie/now_playing",API_Option)
    const data=await responce.json();
   
    dispatch(addNowplayingMovie(data.results))
  }

  useEffect(()=>{
    (!isNowPlayingPresent)&&fetchNowPlayingMovies();//

  },[])

}

export default useNowPlayingMovies