export default () => ({
	main: {
		"@media only screen and (max-device-width: 480px)": {
			padding: '2px',
		},
	},
	site: {
		display: 'flex',
		flexDirection: 'column',
		"@media only screen and (max-device-width: 480px)": {
			minHeight: '100vh',
			borderRadius: 'unset',
			margin: 'unset',
		},
		minHeight: '97vh',
		backgroundColor: 'white',
		borderRadius: '30px',
		margin: '10px',
	},
	siteContent: {
		flex: '1 0 auto',
		width: '100%',
	},
});
