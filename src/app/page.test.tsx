import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Loading the page', () => {
  it('renders the heading correctly', () => {
    render(<Page />);
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Page />);
    expect(asFragment()).toMatchSnapshot();
  });
});
