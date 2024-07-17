import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { addView } from '../utils/viewSlice';


const MovieCard = ({name,key_id,poster_path}) => {
  const dispatch=useDispatch();
  return (
    <div className="w-28 md:w-48 pr-4 ">
    <div className='relative inline-block'>
    <Link to={"/MovieDetail/"+key_id} onClick={()=>dispatch(addView(true))}><img className='rounded-sm' src={"https://image.tmdb.org/t/p/w200/"+poster_path}></img></Link>
    </div>
    </div>
  )
}

export default MovieCard