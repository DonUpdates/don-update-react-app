import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../TabPanel';
import PropTypes from 'prop-types';
import style from './styles';
import { withStyles } from '@material-ui/core';

const CustomTabs = ({ ...props }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  
  const {
    classes,
    newsItem,
    breakingItem,
    infoItem
  } = props;

  return (
    <div>
      <AppBar position="static" color="primary">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          variant="fullWidth"
          className={classes.tabHeader}
        >
          <Tab className={classes.tabItem} label="News" />
          <Tab className={classes.tabItem} label="Breaking" />
          <Tab className={classes.tabItem} label="Info" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {newsItem}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {breakingItem}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {infoItem}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

CustomTabs.propTypes = {
  classes: PropTypes.object,
	newsItem: PropTypes.object,
  breakingItem: PropTypes.object,
  infoItem: PropTypes.object,
};

export default withStyles(style)(CustomTabs);

