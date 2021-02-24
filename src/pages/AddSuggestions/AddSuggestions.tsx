import styled from '@emotion/styled';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const AddSuggestionsContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const AddSuggestionsPage = () => {
	return (
		<AddSuggestionsContainer>
			<Input />
			<Button>Add Suggestion</Button>
		</AddSuggestionsContainer>
	);
};

export default AddSuggestionsPage;
