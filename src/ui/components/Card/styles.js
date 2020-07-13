export default (theme) => ({
	root: {
		margin:'15px 10px 15px 10px',
	},
	cardElement: {
		display: 'flex',
		alignItems: 'center',
		borderRadius: '12px',
		boxShadow: `0 4px 10px 0px rgba(0, 0, 0, 0.4), 0 5px 2px -9px ${theme.palette.colors.grey[700]}`,
		margin: '20px 5px 20px 5px',
		position: 'relative',
	},
	timeComponent: {
		paddingLeft: '3px',
	},
	meridium: {
		paddingLeft: '5px',
	},
	timestampCircle: {
		margin: '10px',
		fontSize: '14px',
		fontWeight: '400',
		width: '50px',
		height: '50px',
		borderRadius: '50%',
		color: '#ffffff',
		backgroundColor: theme.palette.primary.main,
		padding: '4px 8px 5px 8px',
	},
	content: {
		width: '86%',
		fontSize: '15px',
		fontWeight: '300',
		padding: '10px',
	},
	closeButtonDiv: {
		// position: 'absolute', 
		// top: '10px',
		// right: '10px',
	},
	closeButton: {
		height: '24px', 
		width: '24px', 
		color: theme.palette.colors.grey[800],
		cursor: 'pointer',
	},
});
