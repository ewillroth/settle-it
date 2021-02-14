import styled from '@emotion/styled';
import {
	ButtonProps,
	ButtonSizes,
	ButtonVariants,
	StyledButtonProps,
} from './Button.types';
import rem from '../../utils/rem/rem';
import { SyntheticEvent, useState } from 'react';

const StyledButton = styled.button<StyledButtonProps>`
	background-color: ${({ theme, variant }) => {
		switch (variant) {
			case ButtonVariants.destructive:
				return theme.colors.error.default;
			case ButtonVariants.secondary:
				return theme.colors.secondary.default;
			case ButtonVariants.tertiary:
				return theme.colors.greyscale.lightest;
			default:
				return theme.colors.primary.default;
		}
	}};
	color: ${({ theme, variant }) => {
		switch (variant) {
			case ButtonVariants.tertiary:
				return theme.colors.primary.default;
			default:
				return theme.colors.greyscale.lightest;
		}
	}};
	padding: ${({ size }) => {
		switch (size) {
			case ButtonSizes.sm:
				return `${rem(4)} ${rem(8)}`;
			case ButtonSizes.lg:
				return `${rem(8)} ${rem(16)}`;
			default:
				return `${rem(8)} ${rem(12)}`;
		}
	}};
	min-width: ${rem(48)};
	border: 2px solid transparent;
	border-radius: 2px;
	font-family: ${({ theme }) => theme.fontFamily};
	font-size: ${({ theme, size }) => {
		switch (size) {
			case ButtonSizes.sm:
				return theme.fontSizes.default;
			case ButtonSizes.lg:
				return theme.fontSizes.larger;
			default:
				return theme.fontSizes.large;
		}
	}};
	margin: ${rem(4)};

	:focus {
		outline: none;
		border: 2px solid ${({ theme }) => theme.colors.primary.dark};
	}

	:hover {
		background-color: ${({ theme, variant }) => {
			switch (variant) {
				case ButtonVariants.destructive:
					return theme.colors.error.dark;
				case ButtonVariants.secondary:
					return theme.colors.secondary.dark;
				case ButtonVariants.tertiary:
					return theme.colors.greyscale.lighter;
				default:
					return theme.colors.primary.darker;
			}
		}};
		color: ${({ theme, variant }) => {
			switch (variant) {
				case ButtonVariants.tertiary:
					return theme.colors.primary.default;
				default:
					return theme.colors.greyscale.lightest;
			}
		}};
	}

	:active {
		background-color: ${({ theme, variant }) => {
			switch (variant) {
				case ButtonVariants.destructive:
					return theme.colors.error.darker;
				case ButtonVariants.secondary:
					return theme.colors.secondary.darker;
				case ButtonVariants.tertiary:
					return theme.colors.greyscale.light;
				default:
					return theme.colors.primary.darkest;
			}
		}};
		color: ${({ theme, variant }) => {
			switch (variant) {
				case ButtonVariants.tertiary:
					return theme.colors.primary.dark;
				default:
					return theme.colors.greyscale.lightest;
			}
		}};
	}
`;

const Button: React.FC<ButtonProps & React.ComponentProps<'button'>> = ({
	children,
	size = ButtonSizes.md,
	variant = ButtonVariants.primary,
	onKeyDown,
	onKeyUp,
	onClick,
	...props
}) => {
	const [active, setActive] = useState(false);
	const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		if (onKeyDown) {
			onKeyDown(event);
		}
		switch (event.key) {
			case 'Enter':
				setActive(true);
		}
	};
	const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		if (onKeyUp) {
			onKeyUp(event);
		}
		switch (event.key) {
			case 'Enter':
				setActive(false);
		}
	};
	return (
		<StyledButton
			data-testid='button'
			active={active}
			variant={variant}
			size={size}
			onClick={onClick}
			onKeyUp={handleKeyUp}
			onKeyDown={handleKeyDown}
			{...props}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
