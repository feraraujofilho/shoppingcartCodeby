import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#4677ea',
			contrastText: '#fff',
		},
		secondary: {
			main: '#b6b6b6',
			contrastText: "#fff"
		},
	},
	typography: {
		fontFamily: `"Poppins", sans-serif`,
		h1: {
			fontWeight: 600
		},
		h5: {
			fontWeight: 500,
			fontSize: 26,
			letterSpacing: 0.5,
		},
	},
})


export default theme
