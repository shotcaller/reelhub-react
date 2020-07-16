import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, CircularProgress }  from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

export default function HomeBackDrop() {
    const classes = useStyles()
    return (
        <div>
            <Backdrop open={true} className={classes.backdrop}>
            <CircularProgress color="secondary" />
            </Backdrop>
        </div>
    )
}
