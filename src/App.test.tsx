import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('expect to be a cat title', () => {
    render(<App />);
    const headingEl = screen.getByRole('heading', { level: 1 });
    expect(headingEl).toBeInTheDocument();
  });
});
