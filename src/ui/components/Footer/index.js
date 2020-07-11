import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';
import { withStyles } from '@material-ui/core';

const Footer = ({ ...props }) => {
	const { classes } = props;
	return (
		<footer className={classes.footer}>
			<div className={classes.footerContent}>
				<span>
					&copy; {1900 + new Date().getYear()}{' '}
					Don Updates. All rights reserved.
				</span>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Footer);
