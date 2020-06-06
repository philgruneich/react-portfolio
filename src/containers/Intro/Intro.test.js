import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LanguageStore } from '~/store/LanguageStore';
import { HighContrastStore } from '~/store/HighContrastStore';
import { Intro } from './Intro';

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
        <Intro />
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
        <Intro />
      </HighContrastStore>
    </LanguageStore>
  );

  expect(asFragment()).toMatchSnapshot();
});
