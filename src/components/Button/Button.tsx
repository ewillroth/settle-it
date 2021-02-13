import React from 'react';
import styled from '@emotion/styled';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button``;

const Button = ({ children, ...props }: ButtonProps) => (
	<StyledButton data-testid='button' {...props}>
		{children}
	</StyledButton>
);

export default Button;
