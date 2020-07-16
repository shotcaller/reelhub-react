import React,{ useEffect,useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Button, Hidden, Typography  } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import axios from 'axios'
import SkeletonTilesPlaceholder from './SkeletonTilesPlaceholder'
import MovieTile from './MovieTile'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const apiKey = 'd337f6042ceff5ca57c66c0d15bd4efc'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
      backgroundColor: theme.palette.secondary.dark,
    },
    gridList: {
      width: '100%',
    },
    tile: {
        margin: '0 auto 0 auto'
    },
    navButtons: {
        width: 100,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.primary
    }
  }));

export default function MovieList(props) {

    const [isFetching, setisFetching] = useState(true)
    const [results, setResults] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const [currentPage, setcurrentPage] = useState(1)
    const type = props.type
    useEffect(() => {
        const getMovies = async () => {
            setisFetching(true)
            let data = await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=${currentPage}`)
           // let result = await data.json()
            console.log(data)
            setResults(data.data.results)
            setisFetching(false)
            setTotalPages(data.data.total_pages)
        }

        getMovies()
    },[type,currentPage])

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Container style={{display: 'flex', justifyContent: 'space-around'}}>
                <Button variant='contained' 
                        className={classes.navButtons} 
                        startIcon={<ArrowBackIcon />}
                        onClick={() => setcurrentPage(currentPage-1)}
                        disabled={currentPage===1}>
                    Prev
                </Button>
                <Hidden mdDown>
                <Pagination count={totalPages} 
                            showFirstButton 
                            showLastButton 
                            color='primary' 
                            onChange={(e,page) => setcurrentPage(page)}
                            page={currentPage} />
                </Hidden>
                <Button variant='contained' 
                        className={classes.navButtons} 
                        endIcon={<ArrowForwardIcon />} 
                        onClick={() => setcurrentPage(currentPage+1)}
                        disabled={currentPage===totalPages}>
                    Next
                </Button>
                </Container>

        <Grid container spacing={2} >
        {(!isFetching)?(results.length)?results.map((movie) => (
          <Grid item xs={12} md={3} >
          <Container>
            <MovieTile  title={movie.title} 
                        key={movie.id}
                        id={movie.id}
                        posterlink={movie.poster_path} 
                        className={classes.tile} 
                        overview={movie.overview}
                        release_date={movie.release_date}
                         />
            </Container>
            </Grid>
        )):(<Container><Typography 
                variant='h3' 
                color='primary' 
                style={{ margin: '20px 10px'}}>No movies found :(</Typography></Container>):<SkeletonTilesPlaceholder />}
        </Grid>
    </div>
    )
}
