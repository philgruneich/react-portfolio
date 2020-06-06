import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HighContrastStore } from '~/store/HighContrastStore';
import { Pronunciation } from './Pronunciation';

const defaultHighContrastState = {
  state: false
}

test('Matches snapshot', () => {
  const { asFragment } = render(
    <HighContrastStore value={defaultHighContrastState}>
      <Pronunciation />
    </HighContrastStore>
  );

  expect(asFragment()).toMatchSnapshot();
})

test('Matches snapshot with high contrast', () => {
  const { asFragment } = render(
    <HighContrastStore value={{
      state: true
    }}>
      <Pronunciation />
    </HighContrastStore>
  );

  expect(asFragment()).toMatchSnapshot();
})

test('Clicking plays audio', () => {
  window.HTMLMediaElement.prototype.play = jest.fn();

  const { getByLabelText } = render(
    <HighContrastStore value={{
      state: true
    }}>
      <Pronunciation />
    </HighContrastStore>
  );

  const button = getByLabelText('Play sound');

  fireEvent.click(button);

  expect(window.HTMLMediaElement.prototype.play).toBeCalled();
})
