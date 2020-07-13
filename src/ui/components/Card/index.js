import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';
import { withStyles } from '@material-ui/core';
import PopOver from '../Popover';

const Card = ({ ...props }) => {
	const {
		classes, content, time,
	} = props;
	const timeData = time.split(' ');

	return (
		<div className={classes.root}>
			<div className={classes.cardElement}>
				<div className={classes.timestampCircle}>
					<span className={clsx({[classes.timeComponent]: classes.timeComponent && timeData[0].length <= 4})}>{timeData[0]}</span>
					<br />
					<span className={classes.meridium}>{timeData[1]}</span>
				</div>
				<div className={classes.content}>{content}</div>
				<div className={classes.closeButtonDiv}>
					<PopOver content={content} />
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	classes: PropTypes.object.isRequired,
	content: PropTypes.string,
	header: PropTypes.string,
};

export default withStyles(style)(Card);
