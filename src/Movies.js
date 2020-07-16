import React from 'react'
import MovieTabs from './Components/MovieTabs'

export default function Movies(props) {
    return (
        <React.Fragment>
        <div>
            {/* <Typography variant='h3' color='textPrimary'>Movies Page</Typography> */}
            <MovieTabs  />
        </div>
        </React.Fragment>
    )
}
