import { Footer, Header } from '../components';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(styles);

const MainLayout = ({ children }) => {
	const classes = useStyles();
	return (
		<Container className={classes.main} component="main" maxWidth="md">
			<div className={classes.site}>
				<div className={classes.siteContent}>
					<div className={classes.appHeader}>
						<Header />
					</div>
					<div className={classes.main}>
						{children}
					</div>
				</div>
				<Footer />
			</div>
		</Container>
	);
};

MainLayout.propTypes = {
	children: PropTypes.object,
};

export default MainLayout;
