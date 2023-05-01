import React, { useContext } from 'react';
import { HighContrastContext } from '~/store/HighContrastStore';
import { LanguageContext } from '~/store/LanguageStore';
import { FooterContainer, FooterArticle, FooterSmall } from './Footer.styles';
import { WavyLink } from '~/components/WavyLink';
import { CallToAction } from '~/components/CallToAction';

const LINKEDIN_URL = 'https://www.linkedin.com/in/phillip-gruneich-878743164/';
const GITHUB_URL = 'https://github.com/philgruneich'

export const Footer = () => {
  const contrastContext = useContext(HighContrastContext);
  const langContext = useContext(LanguageContext);

  const _ = langContext.state.translations.footer;

  return (
    <FooterContainer hasHighContrast={contrastContext.state}>
      <FooterArticle hasHighContrast={contrastContext.state}>
        <p>{_.intro} <s>{_.strikethrough}</s> {_.invite} <FooterSmall hasHighContrast={contrastContext.state}>{_.small}</FooterSmall></p>
        <p>{_.farewell} <WavyLink href={LINKEDIN_URL} target="_blank" rel="noopener">Linkedin</WavyLink>, <WavyLink href={GITHUB_URL} target="_blank" rel="noopener">Github</WavyLink> {_.goodbye}</p>
        <CallToAction wavyColor="#FF5558" wavyTextColor="#81FE00"/>
      </FooterArticle>
    </FooterContainer>
  )
}
