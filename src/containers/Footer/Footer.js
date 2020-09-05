import React, { useContext } from 'react';
import { HighContrastContext } from '~/store/HighContrastStore';
import {
  FooterSlideOut,
  FooterWrapper,
  FooterGrid,
  FooterBrand,
  FooterLogo
} from './Footer.styles';

export const Footer = () => {
  const contrastContext = useContext(HighContrastContext);

  return (
    <FooterSlideOut>
      <FooterWrapper>
        <FooterGrid>
          <FooterBrand>
            <FooterLogo />
          </FooterBrand>
        </FooterGrid>
      </FooterWrapper>
    </FooterSlideOut>
  );
}
