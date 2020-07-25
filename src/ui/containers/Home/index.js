import { Tabs } from '../../components';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';

const Home = ({ ...props }) => {
  const { classes } = props;

	return (
    <>
      <div className={classes.container}>
        <Tabs />
      </div>
    </>
  );
};

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Home);
