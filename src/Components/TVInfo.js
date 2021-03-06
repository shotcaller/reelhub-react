import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Typography, Grid, Container, Box, Divider, Avatar, Tooltip } from '@material-ui/core'
// import { AvatarGroup } from '@material-ui/lab'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Genres from './Genres'
import { Rating, Skeleton } from '@material-ui/lab';
import ScrollToTop from './ScrollToTop'
const ImageGallery = React.lazy(() => import('./ImageGallery'))
const TVList = React.lazy(() => import('./TVList'))

const apiKey = 'd337f6042ceff5ca57c66c0d15bd4efc'
const images = 'https://image.tmdb.org/t/p/w500'
const logos = 'https://image.tmdb.org/t/p/w200'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4)
    },
    title: {
        fontWeight: 500,
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(2)
    },
    divider: {
        backgroundColor: theme.palette.secondary.main,
        height: 3,
    },
    logoDiv: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexWrap: 'wrap'
    },
    logos: {
        margin: theme.spacing(2),
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        height: 50,
        width: 50
    }
    
}))


export default function TVInfo() {
    let { id } = useParams()
    const [isFetching, setisFetching] = useState(true)
    const [result, setresult]  = useState({})
    useEffect(() => {
        const getData = async () => {
            setisFetching(true)
            let data = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&append_to_response=images,credits`)
            console.log(data)
            setresult(data.data)
            setisFetching(false)
        }
        getData()
    },[id])

    const classes = useStyles()

    return (
        <React.Fragment>
                <ScrollToTop />
        <div className={classes.root}>
            <Grid container>
            <Grid item xs={false} md={6}>
                    <Container>
                        <Box style={{display: 'flex', justifyContent: 'space-around'}}>
                        {(!isFetching)? <img src={(result.poster_path)?`${images}${result.poster_path}`:'poster-coming-soon.png'} 
                             alt={`${result.title} Poster `} 
                             height='600px' 
                             className={classes.poster}   />: <Skeleton width={'500px'} height={'600px'} animation='pulse' /> }
                             </Box>
                    </Container>
                </Grid>

                <Grid item xs={12} md={6} >
                    <Container>
                    {/* Title */}
                        <Typography variant='h2' className={classes.title} color='textPrimary'>
                            {(!isFetching)?result.name:<Skeleton />}
                        </Typography>
                        <Divider variant='middle' className={classes.divider} />
                    
                        { (!isFetching)?(<div>
                            <Genres genres={result.genres} />

                            <Rating value={(result.vote_average)?Math.round(result.vote_average):0} max={10} readOnly />


                            <Typography variant="body1" color="textPrimary">{(result.overview)?result.overview:''}</Typography>
                            <br />
                            <Typography variant='h5' color='secondary'>Cast</Typography>
                            <Typography variant='body1' color='textPrimary' >
                                    {(result.credits.cast[0])?`${result.credits.cast[0].name} `:''} 
                                    {(result.credits.cast[1])?`, ${result.credits.cast[1].name} `:''}
                                    {(result.credits.cast[2])?`, ${result.credits.cast[2].name} `:''}
                                    {(result.credits.cast[3])?`, ${result.credits.cast[3].name}`:''}
                            </Typography>
                            {/* {
                                console.log(result.credits.cast[0].name,result.credits.cast[1].name,result.credits.cast[2].name,result.credits.cast[3].name)
                            } */}
                           <br />
                           <Typography variant='h5' color='secondary'>Release Date</Typography>
                           <Typography variant='body1' color='textPrimary'>
                               {(result.first_air_date)?`${result.first_air_date.split('-')[2]}-${result.first_air_date.split('-')[1]}-${result.first_air_date.split('-')[0]}`:null}
                           </Typography>
                            <br />
                           <Typography variant='h5' color='secondary'>Seasons/Episodes</Typography>
                           <Typography variant='body1' color='textPrimary'>
                               {`${(result.number_of_seasons)?result.number_of_seasons:'NA'}/${(result.number_of_episodes)?result.number_of_episodes:'NA'}`}
                           </Typography>


                            {/* <AvatarGroup max={4}>  */}
                                <div className={classes.logoDiv}>
                                {(result.production_comapnies)?result.production_companies.map(company =>( 
                                    <Tooltip title={company.name} key={company.id}>
                                    <Avatar  
                                            alt={company.name}
                                            src={`${logos}${company.logo_path}`}
                                            className={classes.logos} />
                                    </Tooltip>
                                )):null}
                                </div>
                             {/* </AvatarGroup> */}
 
                            </div>):null}
                    </Container>
                </Grid>
            </Grid>
            <Container style={{marginTop: '10px'}}>
                <Typography variant='h4' color='textPrimary'>Images</Typography>

                {(!isFetching)?
                <ImageGallery imageLink={images} images={result.images.backdrops} />
                :null
            }

                <Typography variant='h4' color='textPrimary' style={{marginBottom: '20px'}}>Similar TV Shows</Typography>
                </Container>

                <TVList type={`${id}/similar`} />
        </div>
        </React.Fragment>
    )
}
