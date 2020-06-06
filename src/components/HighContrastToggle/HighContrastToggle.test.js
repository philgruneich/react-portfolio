import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HighContrastStore } from '~/store/HighContrastStore';
import { HighContrastToggle } from './HighContrastToggle';

const defaultHighContrastState = {
  state: false
}

test('Matches snapshot', () => {
  const { asFragment } = render(
    <HighContrastStore value={defaultHighContrastState}>
      <HighContrastToggle />
    </HighContrastStore>
  );

  expect(asFragment()).toMatchSnapshot();
})

test('Matches snapshot with high contrast', () => {
  const { asFragment } = render(
    <HighContrastStore value={{
      state: true
    }}>
      <HighContrastToggle />
    </HighContrastStore>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('Clicking button toggles high contrast', () => {
  const toggleFn = jest.fn();
  const { getByLabelText } = render(
    <HighContrastStore value={{
      state: true,
      toggle: toggleFn
    }}>
      <HighContrastToggle />
    </HighContrastStore>
  );

  const button = getByLabelText('Alto Contraste');

  fireEvent.click(button);

  expect(toggleFn).toBeCalled();
});
