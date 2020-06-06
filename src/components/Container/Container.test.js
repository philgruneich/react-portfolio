import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '~/theme';
import { Container } from './Container';

test('Component renders text', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Container>Teste</Container>
    </ThemeProvider>
  );

  expect(getByText('Teste'));
})
