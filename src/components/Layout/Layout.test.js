import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '~/theme';
import { Layout } from './Layout';

test('Component renders text', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Layout>Teste</Layout>
    </ThemeProvider>
  );

  expect(getByText('Teste'));
})
