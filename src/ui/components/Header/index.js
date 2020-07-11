import {
	MoreVert,
	Search,
} from '@material-ui/icons';
import logoImage from '../../../assets/images/logo.jpg';
import headerImage from '../../../assets/images/header.jpg';
import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';
import { withStyles } from '@material-ui/core';

const Header = ({ ...props }) => {
	const { classes } = props;
	return (
		<header className={classes.header}>
			<div className={classes.headerContent}>
				<div className={classes.logoImage}><img alt="" height="40" src={logoImage} width="40" /></div>
				<div><img alt="" height="40" src={headerImage} /></div>
				<div className={classes.buttons}><Search /><MoreVert /></div>
			</div>
		</header>
	);
};

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Header);
