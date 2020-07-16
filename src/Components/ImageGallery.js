import React from 'react'
import { GridList, GridListTile } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.secondary.dark,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      border: '2px solid',
      borderColor: theme.palette.primary.main,
      borderRadius: 5 
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
      height: '200px',
      overflowY: 'hidden'
    },
  }));

export default function ImageGallery(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
                  <GridList className={classes.gridList} cols={3.2}>
                      {props.images.map((image,index) => (
                          <GridListTile key={index}>
                              <LazyLoadImage src={`${props.imageLink}${image.file_path}`} alt='Gallery' />
                          </GridListTile>
                      ))}
                  </GridList>

        </div>
    )
}
