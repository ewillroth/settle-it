import styled from '@emotion/styled';
import { DefaultStyledComponentProps } from '../../types/DefaultStyledComponentProps.types';

const SuggestionInput = styled('input')<DefaultStyledComponentProps>`
	width: 80%;
	margin: 12px;
	padding: 4px;
	font-size: 16px;
	font-family: ${({ theme }) => theme.fontFamily};
	border: 2px solid black;

	:focus {
		border: 2px solid red;
		outline: none;
	}
`;

const Input = () => {
	return <SuggestionInput />;
};

export default Input;
