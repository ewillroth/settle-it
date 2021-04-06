import { StyledComponentProps } from '../../types/DefaultStyledComponentProps.types';
import styled from '@emotion/styled';

const SuggestionInput = styled('input')<StyledComponentProps>`
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

const Input = (props: any) => {
	return <SuggestionInput {...props} />;
};

export default Input;
