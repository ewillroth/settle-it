import React from 'react';
import Button from './components/Button/Button';
import { ButtonSizes, ButtonVariants } from './components/Button/Button.types';
import AddSuggestionsPage from './pages/AddSuggestions/AddSuggestions';
import ColorsPage from './pages/ComponentDocsite/Colors';

const App = () => {
	return (
		<div>
			<AddSuggestionsPage />
		</div>
	);
};

export default App;
