import styled from '@emotion/styled';
import { ButtonProps } from './Button.types';
import { DefaultStyledComponentProps } from '../../types/DefaultStyledComponentProps.types';

const StyledButton = styled.button<DefaultStyledComponentProps>`
	background-color: ${({ theme }) => theme.colors.primary.default};
	border: none;
	color: ${({ theme }) => theme.colors.greyscale.light};
`;

const Button = ({ children, ...props }: ButtonProps) => (
	<StyledButton data-testid='button' {...props}>
		{children}
	</StyledButton>
);

export default Button;
