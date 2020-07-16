import React from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, Toolbar, Container, Typography, Divider, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menudiv: {
        width: 20,
        backgroundColor: theme.palette.secondary.main,
        height: 3,
        margin: '0 auto',    
     
    },
    appbar: {
        zIndex: 0,
        boxShadow: "none"
    },
    title: {
      flexGrow: 1,
      padding: 2
    },
    buttons: {
      fontSize: 15,
      padding: theme.spacing(1)
      
    },
    button: {
      display: 'block',
      marginLeft: theme.spacing(1),
      textAlign: 'center',
    }
  }));


export default function Appbar() {
    const classes = useStyles()
    const history = useHistory()

    return (
        <div className={classes.root}>
        <AppBar position="static" color="transparent" className={classes.appbar}>
        <Toolbar>
        <Container>
          <Typography variant="h2" className={classes.title} color="secondary">
            ReelHub
          </Typography>
          </Container>
           <Button variant='outlined' color='textPrimary' className={classes.button} onClick={() => history.push('/')}>
             Home
             <Divider id='movies' className={classes.menudiv} />     
           </Button>

           <Button variant='outlined' color='textPrimary' className={classes.button} onClick={() => history.push('/movies')}>
             Movies
             <Divider id='movies' className={classes.menudiv} />     
           </Button>

           <Button variant='outlined' color='textPrimary' className={classes.button} onClick={() => history.push('/tv')}>
             Tv
             <Divider id='movies' className={classes.menudiv} />     
           </Button>
            {/* <Link to='/' style={{textDecoration: 'none'}}>
                <Typography id="hometext" color='textPrimary' className={classes.buttons}>HOME
                </Typography>
                <Divider id='home' className={classes.menudiv} />
                </Link>
           <Link to='/movies' style={{textDecoration: 'none'}}>
                <Typography color='textPrimary' className={classes.buttons}>MOVIES</Typography>
                <Divider id='movies' className={classes.menudiv} />
                </Link>
          <Link to='/tv' style={{textDecoration: 'none'}}>
                <Typography color='textPrimary' className={classes.buttons}>TV</Typography>
                <Divider id='stats' className={classes.menudiv} />
                </Link> */}
        </Toolbar>
      </AppBar>
        </div>        
    )
}

