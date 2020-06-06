import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LanguageStore } from '~/store/LanguageStore';
import { HighContrastStore } from '~/store/HighContrastStore';
import { Work } from './Work';

const defaultLanguageState = {
  state: {
    lang: 'en',
    translations: {
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
        <Work />
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
        <Work />
      </HighContrastStore>
    </LanguageStore>
  );

  expect(asFragment()).toMatchSnapshot();
});
