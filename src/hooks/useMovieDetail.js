import React, { useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux";
import { API_Option } from '../utils/constants';
import { addMovieKey } from '../utils/viewSlice';

const useMovieDetail = () => {
const dispatch=useDispatch();
const resId=useSelector(store=>store.view.movieDetail);
const fetchMovieDetail=async ()=>{
    const responce=await fetch("https://api.themoviedb.org/3/movie/"+resId+"/videos",API_Option);
    const data=await responce.json();
    const list=data.results.filter((c)=>c.type=="Trailer");
    dispatch(addMovieKey(list[0].key));
}

useEffect(()=>{
    fetchMovieDetail();
},[])
    
 
}

export default useMovieDetail