import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LanguageStore } from '~/store/LanguageStore';
import { HighContrastStore } from '~/store/HighContrastStore';
import { Languages } from './Languages';

const defaultLanguageState = {
  state: {
    lang: 'en'
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
        <Languages />
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
        <Languages />
      </HighContrastStore>
    </LanguageStore>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('Clicking button toggles high contrast', () => {
  const { getByLabelText } = render(
    <LanguageStore value={defaultLanguageState}>
      <HighContrastStore value={defaultHighContrastState}>
        <Languages />
      </HighContrastStore>
    </LanguageStore>
  );

  const button = getByLabelText('Traduzir para Português');

  fireEvent.click(button);

  expect(defaultLanguageState.dispatch).toBeCalled();
});
