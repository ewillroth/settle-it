import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styled from '@emotion/styled';
import { useState } from 'react';

const AddSuggestionsContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const AddSuggestionsPage = () => {
	const [suggestions, setSuggestions] = useState([] as string[]);
	const [inputValue, setInputValue] = useState('');

	const handleKeyDown = (e: any) => {
		switch (e.keyCode) {
			case 13:
				addSuggestion();
		}
	};

	const addSuggestion = () => {
		navigator.vibrate(200);
		setSuggestions([...suggestions, inputValue]);
		setInputValue('');
	};

	return (
		<AddSuggestionsContainer>
			{suggestions.map((suggestion) => (
				<div>{suggestion}</div>
			))}
			<Input
				onChange={(e: any) => setInputValue(e.target.value)}
				onKeyDown={handleKeyDown}
				value={inputValue}
			/>
			<Button onClick={addSuggestion}>Add Suggestion</Button>
		</AddSuggestionsContainer>
	);
};

export default AddSuggestionsPage;
