import {
	Home,
} from '../ui/containers';
import  Layout from '../ui/layout';
import {
	Redirect,
	Router,
	Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PublicRoute from './PublicRoute';
import React from 'react';

const hist = createBrowserHistory();

const router = () => (
	<Router history={hist}>
		<Switch>
			<PublicRoute component={Home} layout={Layout} exact path="/" />
			<Redirect from="/home" to="/" />
		</Switch>
	</Router>
);

router.displayName = 'Router';
export default router;
