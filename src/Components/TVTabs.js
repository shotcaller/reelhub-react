import React from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box, Divider } from '@material-ui/core';
import TVList from './TVList'
import Custom from './Custom'

//Tab Panel //

 function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
            <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };


  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.secondary.dark,
      width: '100%',
    },
    tabs: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.text.primary
    },
    appbar: {
        boxShadow: 'none'
    },
    divider: {
        backgroundColor: theme.palette.primary.main,
        margin: '20px auto 30px auto',
        height: 5,
        width: 100
    }
  }));
  
//Actual Tabs

  export default function TVTabs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="textPrimary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Popular" {...a11yProps(0)} />
            <Tab label="Top Rated" {...a11yProps(1)} />
            <Tab label="Search" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography color='textPrimary' variant='h3' align="center">Popular TV</Typography>
          <Divider variant="middle" className={classes.divider} />
          <TVList type={'popular'} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography color='textPrimary' variant='h3' align="center">Top Rated TV</Typography>
          <Divider variant="middle" className={classes.divider} />
          <TVList type={'top_rated'} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
          <Typography color='textPrimary' variant='h3'  align="center">Search TV</Typography>
          <Divider variant="middle" className={classes.divider} />
            <Custom type={'tv'} />
          </TabPanel>
        </SwipeableViews>
      </div>
    );
  }