import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import theme from '../Theme';
import { useHistory }  from 'react-router-dom'

const poster = 'https://image.tmdb.org/t/p/w500'

const useStyles = makeStyles({
    root: {
      maxWidth: '250px',
      backgroundColor: theme.palette.secondary.dark,
      border: '2px solid',
      borderColor: theme.palette.primary.dark,
      margin: theme.spacing(4)
    },
    media: {
      height: '380px',
    },
  });

export default function TVTile(props) {
    const classes = useStyles()
    const history = useHistory()

    function handleClick() {
      history.push(`/series/info/${props.id}`)
    }

    return (
        <div>
       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={(props.posterlink)?`${poster}${props.posterlink}`:'poster-coming-soon.png'}
          title={props.overview}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
           <Typography variant="body2" color="textSecondary" >
            {(props.first_air_date)?props.first_air_date.toString().split('-')[0]:null}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="secondary">
          Share
        </Button> */}
        <Button size='small' color='secondary' onClick={handleClick}>
          Learn More
        </Button>
        {/* <Button size='small' color='secondary' >
        <Link to={`/info/${props.id}`} replace style={{textDecoration: 'none', color: 'inherit'}}>
          Learn More
        </Link>
        </Button> */}
      </CardActions>
    </Card>
        </div>
    )
}
