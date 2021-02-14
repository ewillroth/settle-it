import { render } from '../setupTests';
import App from './App';

test('renders', () => {
	const { baseElement } = render(<App />);
	expect(baseElement).toBeInTheDocument();
});
