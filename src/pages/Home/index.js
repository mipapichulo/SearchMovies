import React, { useState } from 'react';
import { 
    Container, Typography, Card, 
    Grid , TextField, Button
} from '@material-ui/core';
import styles from './style'
import { MovieIcon } from '../../icons'

const Home = ({ history }) => {
    const [searchText, setSearchText] = useState('')
    const classes = styles();
    const handleSearchTextChange = e => setSearchText(e.target.value);
    const clearSearchInput = () => setSearchText('');
    const searchMovies = () => {
      const toSearch = searchText.trim();
      clearSearchInput();
      if(toSearch !== ''){
        history.push(`/results?movieName=${toSearch}`);
      }
    }

    return(
        <Container className={classes.container}>
        <Card className={classes.cardContainer}>
            <Grid container className={classes.titleContainer}>
              <Grid>
                <Typography variant="h3" className={classes.title}>Search Movies</Typography>
              </Grid>
              <Grid>
                <MovieIcon className={classes.movieIcon}/>
              </Grid>
            </Grid>
            <TextField 
                value={searchText}
                placeholder="Search..."
                onChange={handleSearchTextChange}/>
            <Grid className={classes.btnContainer}>
                <Button 
                  variant="contained"
                  onClick={clearSearchInput}>Clear</Button>
                <Button 
                  variant="contained" 
                  size="large" 
                  color="primary"
                  onClick={searchMovies}
                  className={classes.btnSearch}>Search</Button>
            </Grid>
        </Card>
        </Container>
    )
}

export default Home;
