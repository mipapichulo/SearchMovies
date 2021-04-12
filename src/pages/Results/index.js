import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CircularProgress } from  '@material-ui/core';
import queryString from 'query-string';

import { searchMovie } from '../../redux/actions/search';
import { movieResults, isSearchLoading } from '../../redux/selectors'

import MovieResult from '../../components/MovieResult'
import styles from './style';

const Results = ({ location }) => {
    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));
    const isLoading = useSelector(state => isSearchLoading(state));
    
    useEffect(() => {
        const { movieName } = queryString.parse(location.search);
        if(movieName && !movies){
            dispatch(searchMovie({ movieName }));
        }
    })

    const renderMovies = () => {
        const classes = styles();
        if(movies){
            return movies.map(
                (value, index) => <MovieResult key={index} {...value}/>  
            )
        }else if(isLoading){
            return <CircularProgress 
                    color="primary" 
                    size={100} 
                    className={classes.loading}/>
        }else {
            return <div/>;
        }
    }

    
    return(
        <Container style={{ marginTop : '1.5em' }}>
          {renderMovies()}
        </Container>
    )
}

export default Results;