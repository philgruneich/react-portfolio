import React, { useContext } from 'react';
import { HighContrastContext } from '~/store/HighContrastStore';
import {
  IntroWrapper,
  IntroContainer,
  IntroBrand,
  IntroSection,
  IntroLogo,
  IntroArticleGrid as IntroArticle,
  IntroTopBarGrid as IntroTopBar
} from './Intro.styles';

export const Intro = () => {
  const contrastContext = useContext(HighContrastContext);

  return (
    <IntroWrapper id="intro-wrapper" hasHighContrast={contrastContext.state}>
      <IntroContainer>
        <IntroSection>
          <IntroBrand>
            <IntroLogo />
          </IntroBrand>
          <IntroTopBar />
          <IntroArticle />
        </IntroSection>
      </IntroContainer>
    </IntroWrapper>
  );
};
