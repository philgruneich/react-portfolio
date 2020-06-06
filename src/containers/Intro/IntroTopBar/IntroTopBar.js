import React from 'react';
import { Languages } from '~/components/Languages';
import { HighContrastToggle } from '~/components/HighContrastToggle';
import {
  IntroTopBarWrapper,
  IntroTopBarContainer
} from './IntroTopBar.styles';

export const IntroTopBar = () => (
  <IntroTopBarWrapper>
    <IntroTopBarContainer>
      <HighContrastToggle />
      <Languages />
    </IntroTopBarContainer>
  </IntroTopBarWrapper>
);
