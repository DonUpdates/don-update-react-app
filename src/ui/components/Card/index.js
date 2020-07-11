import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';
import Cancel from '@material-ui/icons/CancelOutlined';
import { withStyles } from '@material-ui/core';

const Card = ({ ...props }) => {
	const {
		classes, content, onRemoveClick, time,
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
					<Cancel className={classes.closeButton} onClick={onRemoveClick} />
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	classes: PropTypes.object.isRequired,
	content: PropTypes.string,
	header: PropTypes.string,
	onRemoveClick: PropTypes.func,
};

export default withStyles(style)(Card);
