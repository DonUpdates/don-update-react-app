import { unstable_createMuiStrictModeTheme as createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
	palette: {
		action: {
            hoverOpacity: 0.08,
            hover: 'rgba(0, 0, 0, 0.08)',
            selected: 'rgba(0, 0, 0, 0.14)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            active: 'rgba(0, 0, 0, 0.54)',
          },
		background: {
			default: '#fafafa',
			paper: '#fff',
		},
		colors: {
			grey,
		},
		common: {
			black: '#000',
			white: '#fff',
		},
		contrastThreshold: 3,
		divider: 'rgba(0, 0, 0, 0.12)',
		error: {
			contrastText: '#fff',
			dark: '#d32f2f',
			light: '#e57373',
			main: '#f44336',
		},
		grey: {
			50: '#fafafa',
			100: '#f5f5f5',
			200: '#eeeeee',
			300: '#e0e0e0',
			400: '#bdbdbd',
			500: '#9e9e9e',
			600: '#757575',
			700: '#616161',
			800: '#424242',
			900: '#212121',
			A100: '#d5d5d5',
			A200: '#aaaaaa',
			A400: '#303030',
			A700: '#616161',
		},
        primary: {
            main: '#bc0424',
            light: 'rgb(201, 54, 79)',
            dark: 'rgb(131, 2, 25)',
            contrastText: '#fff',
          },
        secondary: {
            main: '#3D5AFE',
            light: 'rgb(99, 123, 254)',
            dark: 'rgb(42, 62, 177)',
            contrastText: '#fff',
          },
		text: {
			disabled: 'rgba(0, 0, 0, 0.38)',
			hint: 'rgba(0, 0, 0, 0.38)',
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
		},
	},
	typography: {
		fontFamily: [
			'Roboto',
			'Open Sans',
			'"Helvetica Neue"',
            'Arial',
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Ubuntu',
            'sans-serif',
		].join(','),
		// Tell Material-UI what's the font-size on the html element is.
		htmlFontSize: 10, // font-size: 62.5%; /* 62.5% of 16px = 10px */
	},
});

export default responsiveFontSizes(theme);
