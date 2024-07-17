import { API_Option } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovie } from "../utils/moviesSlice"

const useTopRatedMovie=()=>{
    const dispatch=useDispatch();
    const fetchTopRatedMovie=async ()=>{
        const responce=await fetch("https://api.themoviedb.org/3/movie/top_rated",API_Option);
        const data=await responce.json();
        dispatch(addTopRatedMovie(data.results));
    }

    useEffect(()=>{
        fetchTopRatedMovie();

    },[])


    

    
}

export default useTopRatedMovie;