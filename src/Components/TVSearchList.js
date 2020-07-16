import React,{ useEffect,useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Button, Hidden  } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import axios from 'axios'
import SkeletonTilesPlaceHolder from './SkeletonTilesPlaceholder'
import TVTile from './TVTile'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const apiKey = 'd337f6042ceff5ca57c66c0d15bd4efc'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
      backgroundColor: theme.palette.secondary.dark,
      marginTop: theme.spacing(3)
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

export default function MovieSearchList(props) {

    const [isFetching, setisFetching] = useState(false)
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const [currentPage, setcurrentPage] = useState(1)
    useEffect(() => {
        const getMovies = async () => {
            setSearch(props.search)
            if(search!==''){
            setisFetching(true)
            let data = await axios.get(`https://api.themoviedb.org/3/search/tv/?api_key=${apiKey}&language=en-US&page=${currentPage}&query=${search}&include_adult=false`)
           // let result = await data.json()
            console.log(data)
            setResults(data.data.results)
            setisFetching(false)
            setTotalPages(data.data.total_pages)
            }
        }

        getMovies()
    },[props.search,currentPage,search])

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
        {(!isFetching)?results.map((tv) => (
          <Grid item xs={12} md={3}>
          <Container>
            <TVTile  title={tv.name} 
                        id={tv.id}
                        posterlink={tv.poster_path} 
                        className={classes.tile} 
                        overview={tv.overview}
                        first_air_date={tv.first_air_date}
                         />
            </Container>
            </Grid>
        )):<SkeletonTilesPlaceHolder />}
        </Grid>
    </div>
    )
}
