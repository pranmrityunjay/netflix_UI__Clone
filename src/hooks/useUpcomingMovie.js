import { useEffect } from "react" 
import { API_Option } from "../utils/constants"
import { useDispatch} from 'react-redux'
import { addUpcomingMovie } from "../utils/moviesSlice"
const useUpcomingMovie=()=>{
    const dispatch=useDispatch();
    const fetchUpcomingMovie=async ()=>{
        const responce=await fetch("https://api.themoviedb.org/3/movie/upcoming",API_Option);
        const data=await responce.json();
        dispatch(addUpcomingMovie(data.results));
        
    }
    useEffect(()=>{
        fetchUpcomingMovie();

    },[])

}

export default useUpcomingMovie;