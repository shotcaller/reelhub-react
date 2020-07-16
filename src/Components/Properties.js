import React from 'react'
import { Grid, Typography, Container, Paper, Divider } from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import UpdateIcon from '@material-ui/icons/Update';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
   infoPaper: {
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: 0 ,
        textAlign: 'center',
        padding: 4
    },
     icons: {
        fontSize: 100,
        color: theme.palette.text.primary,
        marginTop: theme.spacing(2)
    },
    divider: {
        width: 80,
        height: 5,
        backgroundColor: theme.palette.primary.light,
        margin: '0 auto 0 auto'
        
    },
    services: {
        color: theme.palette.secondary.main,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        textAlign: 'center'
    },
    servicename: {
        backgroundColor: theme.palette.text.primary,
        margin: '0 auto 30px auto',
        height: 5,
        width: 100
    }
  }));


export default function Properties() {

    const classes = useStyles()
    return (
        <div>
            <Container>
                <Typography variant="h2" className={classes.services}>Our Services include</Typography>
                <Divider variant="middle" className={classes.servicename} />
            </Container>

            <Paper variant="outlined" className={classes.infoPaper}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={4}>
                   
                        <MovieIcon  className={classes.icons} />
                        <Divider variant="middle" className={classes.divider} />
                        <Container>
                        <Typography variant="h5" color="textPrimary">
                           <br /> Get information on all movies dynamically.
                        </Typography>
                        </Container>
                </Grid>
                <Grid item xs={12} sm={4}>
                        <UpdateIcon  className={classes.icons} />
                        <Divider variant="middle" className={classes.divider} />
                        <Container>
                        <Typography variant="h5" color="textPrimary">
                            <br />Stay updated on upcoming releases always.
                        </Typography>
                        </Container>
                </Grid>
                <Grid item xs={12} sm={4}>
                        <LiveTvIcon  className={classes.icons} />
                        <Divider variant="middle" className={classes.divider} />
                        <Container>
                        <Typography variant="h5" color="textPrimary">
                           <br /> Latest updates on all TV Shows and releases.
                        </Typography>
                        </Container>
                </Grid>                
           </Grid>
           </Paper>
        </div>
    )
}
