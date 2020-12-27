import React from 'react';
import styled from '@emotion/styled';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button`
	color: red;
`;

const Button = ({ children, ...props }: ButtonProps) => (
	<StyledButton {...props}>{children}</StyledButton>
);

export default Button;
