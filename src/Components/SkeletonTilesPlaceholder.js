import React from 'react'
import { Grid, Container } from '@material-ui/core'
import TileSkeleton from './TileSkeleton'

export default function SkeletonTilesPlaceholder() {
    return (
        <Grid container>
        <Grid item xs={12} md={3}><Container><TileSkeleton /></Container></Grid>
        <Grid item xs={12} md={3}><Container><TileSkeleton /></Container></Grid>
        <Grid item xs={12} md={3}><Container><TileSkeleton /></Container></Grid>
        <Grid item xs={12} md={3}><Container><TileSkeleton /></Container></Grid>
        <Grid item xs={12} md={3}><Container><TileSkeleton /></Container></Grid>
        <Grid item xs={12} md={3}><Container><TileSkeleton /></Container></Grid>
        <Grid item xs={12} md={3}><Container><TileSkeleton /></Container></Grid>
        <Grid item xs={12} md={3}><Container><TileSkeleton /></Container></Grid>
        
        </Grid>
    )
}
