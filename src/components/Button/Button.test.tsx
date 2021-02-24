import React from 'react';
import { render } from '../../../setupTests';
import Button from './Button';

describe('Button', () => {
	it('exists', () => {
		const { getByTestId } = render(<Button>hi</Button>);
		const button = getByTestId('button');
		expect(button).toBeInTheDocument();
	});
});
