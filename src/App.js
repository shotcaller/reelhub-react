import React,{ Suspense } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Theme'
import Appbar from './Components/Appbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeBackDrop from './Components/HomeBackDrop'
const Home = React.lazy(() => import('./Home'))
const Movies = React.lazy(() => import('./Movies'))
const TV = React.lazy(() => import('./TV'))
const MovieInfo = React.lazy(() => import('./Components/MovieInfo'))
const TVInfo = React.lazy(() => import('./Components/TVInfo'))



export default function App() {

    return (
        <div>
        <ThemeProvider theme={theme} >
        <Router onUpdate={() => window.scrollTo(0,0)} >
        <Appbar />
            <Switch>
                <Route exact path='/'>
                <Suspense fallback={<HomeBackDrop />}>
                     <Home />
                    </Suspense>
                </Route>

                <Route path='/movies'>
                <Suspense fallback={<HomeBackDrop />}>
                    <Movies />
                </Suspense>
                </Route>

                <Route path='/tv'>
                <Suspense fallback={<HomeBackDrop />}>
                    <TV  />
                    </Suspense>
                </Route>

                <Route path='/movie/info/:id'>
                <Suspense fallback={<HomeBackDrop />}>
                  <MovieInfo />
                  </Suspense>
                </Route>
    
                <Route path='/series/info/:id'>
                <Suspense fallback={<HomeBackDrop />}>
                    <TVInfo />
                    </Suspense>
                </Route>
            </Switch>
            </Router>
            </ThemeProvider>
        </div>
    )
}

