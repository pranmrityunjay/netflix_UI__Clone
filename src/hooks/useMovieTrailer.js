import { useEffect} from "react";
import { API_Option } from "../utils/constants"
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from "../utils/moviesSlice";

export const useMovieTrailer=(movieID)=>{
    const isTrailerPresent=useSelector((store)=>store.movies.trailerVideo);
    const dispatch=useDispatch();
    const fetchTrailer=async ()=>{
        const responce=await fetch("https://api.themoviedb.org/3/movie/"+movieID+"/videos",API_Option)
        const data=await responce.json();
        const trailer=data.results.filter((c)=>c.type=="Trailer");
        dispatch(addTrailerVideo(trailer[0]))
    }
    useEffect(()=>{
        console.log("hello");
        (!isTrailerPresent)&&fetchTrailer();
    },[])
}