export interface theme {
	colors: {
		primary: Colors;
		secondary: Colors;
		success: Colors;
		warning: Colors;
		error: Colors;
		greyscale: Colors;
	};
	fontFamily: string;
	fontWeights: {
		light: string;
		default: string;
		bold: string;
	};
	fontSizes: {
		small: string;
		default: string;
		large: string;
		larger: string;
		largest: string;
	};
}

export interface Colors {
	lightest?: string;
	lighter?: string;
	light?: string;
	default: string;
	dark?: string;
	darker?: string;
	darkest?: string;
}
