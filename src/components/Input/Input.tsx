import styled from '@emotion/styled';
import { DefaultStyledComponentProps } from '../../types/DefaultStyledComponentProps.types';
import rem from '../../utils/rem/rem';

const StyledInput = styled('input')<DefaultStyledComponentProps>`
	width: 100%;
	margin: ${rem(12)};
	padding: ${rem(4)};
	font-size: ${({ theme }) => theme.fontSizes.large};
	font-family: ${({ theme }) => theme.fontFamily};
	border: 2px solid ${({ theme }) => theme.colors.greyscale.darkest};

	:focus {
		border: 2px solid ${({ theme }) => theme.colors.primary.default};
		outline: none;
	}
`;

const Input = () => {
	return <StyledInput />;
};

export default Input;
