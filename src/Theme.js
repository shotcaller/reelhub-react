import { createMuiTheme } from '@material-ui/core/styles'
import {pink } from '@material-ui/core/colors'


const theme = createMuiTheme({
    palette: {
        primary: {
            light: pink[500],
            main: 'rgba(149,7,64,1)',
            dark: 'rgba(78,78,80,1)' //grey


        },
        secondary: {
            main: 'rgba(195,7,63,1)', //dark pink
            dark: 'rgba(26,26,29,1)' //black
        },
        text: {
            primary: 'rgba(255,255,255,1)', //white
            secondary: 'rgba(78,78,80,1)' 
        }
    
    }
})

export default theme