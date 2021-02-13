import 'jest-extended';
import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import defaultTheme from './src/themes/default';

const WithThemes = ({ children }: any) => {
	return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

const customRender = (ui: any) => render(ui, { wrapper: WithThemes });

export * from '@testing-library/react';
export { customRender as render };
