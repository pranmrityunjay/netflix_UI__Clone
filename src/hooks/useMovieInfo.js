import { useEffect } from 'react'
import { API_Option } from '../utils/constants'
import {useSelector} from "react-redux"
import { addMovieDetails } from '../utils/viewSlice'
import {useDispatch} from 'react-redux'
const useMovieInfo = () => {
const movieId=useSelector(store=>store.view.movieDetail);
const dispatch=useDispatch();
    const fetchInfo=async ()=>{
        const responce=await fetch("https://api.themoviedb.org/3/movie/"+movieId,API_Option);
        const data=await responce.json();
        dispatch(addMovieDetails(data));
    }

    useEffect(()=>{
        fetchInfo();

    },[])
    
  
}

export default useMovieInfo