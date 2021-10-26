import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('app renders without problems', () => {
  render(<App />);
});
