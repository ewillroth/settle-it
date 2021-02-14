import React from 'react';
import Button from './components/Button/Button';
import { ButtonSizes, ButtonVariants } from './components/Button/Button.types';
import ColorsPage from './pages/ComponentDocsite/Colors';

const App = () => {
	return (
		<div style={{ backgroundColor: '#ccc', height: '100vh' }}>
			<ColorsPage />
			<Button size={ButtonSizes.sm}>Small button</Button>
			<Button
				onClick={(event) => {
					console.log(event);
				}}
			>
				Submit
			</Button>
			<Button size={ButtonSizes.lg}>Add Suggestion</Button>
			<Button variant={ButtonVariants.destructive}>
				Remove Suggestion
			</Button>
			<Button variant={ButtonVariants.secondary}>Secondary</Button>
			<Button variant={ButtonVariants.tertiary}>Tertiary</Button>
		</div>
	);
};

export default App;
