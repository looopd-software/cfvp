import React from 'react';
import { render, screen } from '@testing-library/react';
import ExampleComponent from './components/ExampleComponent';

describe('Component test', () => {
  it('renders the heading correctly', () => {
    render(<ExampleComponent />)

    expect(screen.getByText("Component")).toBeInTheDocument();
  });
});
