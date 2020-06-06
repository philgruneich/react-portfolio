import React from 'react';
import { render } from '@testing-library/react';
import { LanguageStore } from '~/store/LanguageStore';
import { HighContrastStore } from '~/store/HighContrastStore';
import { ThemeProvider } from 'styled-components';
import { theme } from '~/theme';
import Page from '~/pages';

const defaultLanguageState = {
  state: {
    lang: 'en',
    translations: {
      intro: {
        article: {
          hi: 'hi',
          iam: 'I\'am',
          text: 'Text'
        }
      },
      calltoaction: {
        say: 'SAY',
        hi: 'HI'
      },
      work: {
        title: 'Title',
        text: 'Text'
      }
    }
  },
  dispatch: jest.fn()
};

const defaultHighContrastState = {
  state: false
};

test('Matches snapshot', () => {
  const { asFragment } = render(
    <LanguageStore value={defaultLanguageState}>
      <HighContrastStore value={defaultHighContrastState}>
        <ThemeProvider theme={theme}>
          <Page />
        </ThemeProvider>

      </HighContrastStore>
    </LanguageStore>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('Matches snapshot with high contrast', () => {
  const { asFragment } = render(
    <LanguageStore value={defaultLanguageState}>
      <HighContrastStore value={{
        state: true
      }}>
        <ThemeProvider theme={theme}>
          <Page />
        </ThemeProvider>
      </HighContrastStore>
    </LanguageStore>
  );

  expect(asFragment()).toMatchSnapshot();
});
