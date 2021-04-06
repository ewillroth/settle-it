import { StyledComponentProps } from '../../types/DefaultStyledComponentProps.types';

export interface ButtonProps {
	children: string | JSX.Element;
	variant?: ButtonVariants;
	size?: ButtonSizes;
}

export enum ButtonSizes {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
}

export enum ButtonVariants {
	primary = 'primary',
	secondary = 'secondary',
	tertiary = 'tertiary',
	destructive = 'destructive',
}

export interface StyledButtonProps extends StyledComponentProps {
	variant?: ButtonVariants;
	size?: ButtonSizes;
	active?: boolean;
}
