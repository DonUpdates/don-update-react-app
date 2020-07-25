export default (theme) => ({
	header: {
		textAlign: 'center',
	},
	logoImage: {
		paddingLeft: '30px',
	},
	buttons: {
		paddingRight: '10px',
	},
	iconButton: {
		height: '32px',
		width: '32px',
		paddingTop: '10px',
		color: theme.palette.colors.grey[700],
	},
	headerContent: {
		backgroundColor:'#ffffff',
		fontSize: '16px',
		margin: '0',
		textAlign: 'center',
		fontWeight: '200',
		padding: '10px 10px 5px 10px',
		borderTopRightRadius: '12px',
		borderTopLeftRadius: '12px',
		display: 'flex',
		justifyContent: 'space-between',
	},
});
