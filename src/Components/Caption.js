import React, { Suspense } from 'react'
import {pink } from '@material-ui/core/colors'
import { Grid, Typography, Container, Button, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory }  from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    caption: {
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(4)
    },
    startbutton: {
        padding: theme.spacing(2),
        borderRadius: 8,
        color: theme.palette.primary.light,
        border: '2px solid',
        borderColor: theme.palette.primary.light,
        marginTop: theme.spacing(4),
        '&:hover':{
            borderColor: pink['A200'],
            color: pink['A200'],
            boxShadow: 3             
        }
    }
  }));

export default function Caption() {
    const classes = useStyles()
    const history = useHistory()

    function handleClick() {
        history.push(`/movies`)
      }

    return (
        <div>
             <Grid container spacing={0}>
              <Grid item xs={12} sm={4} >
              <Container className={classes.caption}>
                  <Typography color="textPrimary" variant="h1">YOUR<br /> MOVIE<br />HUB.</Typography>
                  <Button variant="outlined" className={classes.startbutton} onClick={handleClick}>
                        <Typography variant="h4" >Get Started</Typography>
                  </Button>
                  </Container>
              </Grid>
              <Grid item xs={false} sm={8} >
              <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Suspense fallback={<LinearProgress color="secondary" />}>
                  <img src='front.jpg' alt="Home" height="500px"     />
                  </Suspense>
                  </div>
              </Grid>
            </Grid>

        </div>
    )
}
