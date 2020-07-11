/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({
	component: Component,
	layout: Layout,
	...rest
}) => (
	<Route
		{...rest}
		render={(props) => (
			<Layout {...props}>
				<Component {...props} />
			</Layout>
		)}
	/>
);

PublicRoute.propTypes = {
	component: PropTypes.any,
	layout: PropTypes.any,
};

export default PublicRoute;
