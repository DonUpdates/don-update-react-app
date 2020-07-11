import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';
import { withStyles } from '@material-ui/core';

const List = ({ ...props }) => {
	const {
		borderAtTop, classes, color, items,
	} = props;

	const getClassName = (index) => {
		if (borderAtTop) {
			return clsx({
				[classes.firstItem]: classes.firstItem && !index,
				[classes.itemTopBorder]: classes.itemTopBorder && index,
			});
		}
		return classes.itemBottomBorder;
	};

	return (
		<>
			<ul className={clsx({ [classes.list]: classes.list, color: classes[color] })}>
				{items.map((element, index) => (
					<li
						className={getClassName(index)}
						key={index}
					>{element}
					</li>
				))}
			</ul>
		</>
	);
};

List.defaultProp = {
	borderAtTop: true,
	color: 'defaultColor',
};

List.propTypes = {
	borderAtTop: PropTypes.bool,
	classes: PropTypes.object.isRequired,
	color: PropTypes.string,
	items: PropTypes.array,
};

export default withStyles(style)(List);
