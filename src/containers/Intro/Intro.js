import React, { useContext } from 'react';
import { HighContrastContext } from '~/store/HighContrastStore';
import { IntroArticle } from './IntroArticle';
import { IntroTopBar } from './IntroTopBar';
import {
  IntroWrapper,
  IntroContainer,
  IntroBrand,
  IntroSection,
  IntroLogo
} from './Intro.styles';

export const Intro = () => {
  const contrastContext = useContext(HighContrastContext);

  return (
    <IntroWrapper hasHighContrast={contrastContext.state}>
      <IntroContainer>
        <IntroBrand>
          <IntroLogo />
        </IntroBrand>
        <IntroSection>
          <IntroTopBar />
          <IntroArticle />
        </IntroSection>
      </IntroContainer>
    </IntroWrapper>
  );
};
