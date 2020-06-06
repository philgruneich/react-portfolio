import React from 'react';
import { render } from '@testing-library/react';
import { Title } from './Title';

test('Component renders text', () => {
  const { getByText } = render(
    <Title>Teste</Title>
  );

  expect(getByText('Teste'));
})
