// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SmartHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SmartHub/i);
    expect(titleElement).toBeInTheDocument();
});
