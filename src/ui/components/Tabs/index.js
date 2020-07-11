import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../TabPanel';
import PropTypes from 'prop-types';

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
        >
          <Tab label="News" />
          <Tab label="Breaking" />
          <Tab label="Info" />
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
	newsItem: PropTypes.object,
  breakingItem: PropTypes.object,
  infoItem: PropTypes.object,
};

export default CustomTabs;
