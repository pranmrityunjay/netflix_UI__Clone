import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieDetail } from '../utils/viewSlice';

const MovieDetail = () => {
    const dispatch=useDispatch();
    let { resId } = useParams();
    dispatch(addMovieDetail(resId));
    return (
        <div>
            <Header/>
        </div>
    );
};

export default MovieDetail;
