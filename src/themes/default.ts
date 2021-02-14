import { theme } from '../types/theme.type';

const defaultTheme: theme = {
	colors: {
		primary: {
			lightest: '#C4C8FD',
			lighter: '#8991FA',
			light: '#5863F8',
			default: '#2835F6',
			dark: '#0713B0',
			darker: '#040A62',
			darkest: '#02063B',
		},
		secondary: {
			light: '#C1D7D7',
			default: '#9BBFBF',
			dark: '#598888',
		},
		success: {
			lighter: '#9DD2A2',
			light: '#73BF7B',
			default: '#479A4F',
			dark: '#33703A',
			darker: '#27542C',
		},
		warning: {
			lighter: '#FFEBC2',
			light: '#FFD685',
			default: '#FFC857',
			dark: '#FFAD0A',
			darker: '#E09600',
		},
		error: {
			lighter: '#FEB0AF',
			light: '#FC7573',
			default: '#DD0703',
			dark: '#8D0402',
			darker: '#640302',
		},
		greyscale: {
			lightest: '#FFF',
			lighter: '#EAEBEA',
			light: '#B7BAB5',
			default: '#656963',
			dark: '#51544F',
			darker: '#0A0B0A',
			darkest: '#000',
		},
	},
	fontFamily: '"Source Sans Pro", sans-serif',
	fontWeights: {
		light: '200',
		default: '400',
		bold: '700',
	},
};

export default defaultTheme;
