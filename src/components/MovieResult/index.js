import { Card, Typography, Button } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './style';

const IMAGE_NOT_FOUND = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM34U0EWfJ8vN-DTz5L6vivJ0EsKlfh2bgqQ&usqp=CAU';

const MovieResult = ({Poster, Title, Year, Type, imdbID, history }) => {
    const classes = styles();
    const handleDetailMovie = () => {
        history.push(`/movie/${imdbID}`)
    }

    return(
        <Card className={classes.root}>
          <div className={classes.gridContainer}
           >
            <div 
             className={classes.gridItem}
             style={{ gridColumn : 'span 4' }}>
              <img
               className={classes.image}
               src={Poster === 'N/A' ? IMAGE_NOT_FOUND : Poster } 
               alt={Title} />
            </div>
            <div 
             className={classes.gridItem}
             style={{ gridColumn : 'span 8' }}>
              <Typography variant="h4">{Title}</Typography>
              <Typography variant="h4">{Year}</Typography>
              <Typography variant="h5">
                  <span style={{ fontWeight : 'lighter'}}>Type: </span>{Type}
              </Typography>
              <Button 
               color="primary" 
               variant="contained"
               style={{ marginTop : '.5em' }}
               onClick={handleDetailMovie}>See more</Button>
            </div>
          </div>
        </Card>
    )
    
}

export default withRouter(MovieResult);