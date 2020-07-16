import React from 'react'
import { Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2)
    },
    chip: {
        margin: theme.spacing(1),
        color: theme.palette.primary.main
    }
}))

export default function Genres(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {props.genres.map((genre) => (
                <Chip label={genre.name} key={genre.id} className={classes.chip} />
            ))}
        </div>
    )
}
