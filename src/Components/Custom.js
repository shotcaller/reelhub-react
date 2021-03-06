import React,{ useState } from 'react'
import { Container, TextField, IconButton, Input, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles'
import MovieSearchList from './MovieSearchList'
import TVSearchList from './TVSearchList'

const useStyles = makeStyles((theme) => ({
    iconButton: {
        borderColor: theme.palette.primary.main,
        
        transition: '0.3s ease',
        '&:hover *': {
            borderColor: theme.palette.text.primary,
            color: theme.palette.secondary.main
        }

    },
    icon: {
        color: theme.palette.text.primary,
        transition: '0.4s ease'
    },
    text: {
        width: '100%',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme.palette.secondary.main,
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
                            fullWidth
                            color='primary'
                            variant='outlined' 
                            className={classes.text}
                            onChange={(e) =>{ setsearchText(e.target.value) 
                                            setPressed(false)}}
                            InputProps={{
                            endAdornment:
                                <InputAdornment position='end'>
                                <IconButton  className={classes.iconButton} onClick={() => setPressed(true)}>
                                     <SearchIcon className={classes.icon} />
                                </IconButton>
                                </InputAdornment>
                                }}
                             />
                
            </Container>
            {props.type==='movie'?<MovieSearchList search={(pressed)?searchText:''} />:<TVSearchList search={(pressed)?searchText:''} />}
            

        </div>
    )
}
