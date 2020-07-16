import React,{ useState } from 'react'
import { Container, TextField, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles'
import MovieSearchList from './MovieSearchList'
import TVSearchList from './TVSearchList'

const useStyles = makeStyles((theme) => ({
    iconButton: {
        border: '2px solid',
        borderColor: theme.palette.primary.main,
        
        transition: '0.3s ease',
        '&:hover': {
            borderColor: theme.palette.text.primary,
        }

    },
    icon: {
        color: theme.palette.text.primary
    },
    text: {
        width: '80%',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme.palette.text.secondary,
            }
    }
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around'
    }

}))

export default function Custom(props) {
    const [searchText, setsearchText] = useState('')
    const [pressed, setPressed] = useState(false)
    const classes = useStyles()
    
    return (
        <div>
            <Container className={classes.container}>
                <TextField  label='Search'
                            color='secondary' 
                            variant='outlined' 
                            className={classes.text}
                            onChange={(e) =>{ setsearchText(e.target.value) 
                                            setPressed(false)}}  />
                <IconButton  className={classes.iconButton} onClick={() => setPressed(true)}>
                    <SearchIcon className={classes.icon} />
                </IconButton>
            </Container>
            {props.type==='movie'?<MovieSearchList search={(pressed)?searchText:''} />:<TVSearchList search={(pressed)?searchText:''} />}
            

        </div>
    )
}
