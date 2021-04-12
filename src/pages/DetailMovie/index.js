import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchMovieById } from '../../redux/actions/search'
import { movieResultById } from  '../../redux/selectors'


const DetailMovie = ({ match }) => {
    const dispatch = useDispatch();
    const movieResult = useSelector(state => movieResultById(state));
    console.log(movieResult);
    useEffect(() => {
        if(!movieResult){
            const movieId = match.params.id;
            dispatch(searchMovieById({ movieId }))
        }
        console.log('no')
    })

    return(
        <Container>
            DetailMovie
        </Container>
    )
}

export default DetailMovie;