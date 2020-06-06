import React from 'react';
import { render } from '@testing-library/react';
import { Brand } from './Brand';

test('Matches snapshot', () => {
  const { asFragment } = render(<Brand />);

  expect(asFragment()).toMatchSnapshot();
})
