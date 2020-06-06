import React from 'react';
import { render } from '@testing-library/react';
import { LanguageStore } from '~/store/LanguageStore';
import { HighContrastStore } from '~/store/HighContrastStore';
import { CallToAction } from './CallToAction';

const defaultLanguageState = {
  state: {
    translations: {
      calltoaction: {
        say: 'SAY',
        hi: 'HI'
      }
    }
  }
}

const defaultHighContrastState = {
  state: false
}

test('Matches snapshot', () => {
  const { asFragment } = render(
    <LanguageStore value={defaultLanguageState}>
      <HighContrastStore value={defaultHighContrastState}>
      <CallToAction />
      </HighContrastStore>
    </LanguageStore>
  );

  expect(asFragment()).toMatchSnapshot();
})

test('Matches snapshot with high contrast', () => {
  const { asFragment } = render(
    <LanguageStore value={defaultLanguageState}>
      <HighContrastStore value={{
        state: true
      }}>
      <CallToAction />
      </HighContrastStore>
    </LanguageStore>
  );

  expect(asFragment()).toMatchSnapshot();
})
