import React from 'react'
import { Skeleton } from '@material-ui/lab'
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles' 

const useStyles = makeStyles((theme) =>({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),

    }
}))

export default function TileSkeleton() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Skeleton variant='rect' width={'250px'} height={'380px'} animation='pulse' />
            <Skeleton width={'250px'} animation='pulse'>
                <Typography>.</Typography>
            </Skeleton>
            <Skeleton width={'250px'} animation='pulse'>
                <Typography>.</Typography>
            </Skeleton> 
            <Skeleton width={'250px'} animation='pulse'>
               <Button>.</Button>
            </Skeleton> 
        </div>
    )
}
