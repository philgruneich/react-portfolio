import React, { useContext } from 'react';
import { LanguageContext } from '~/store/LanguageStore';
import { HighContrastContext } from '~/store/HighContrastStore';
import {
  LanguagesContainer,
  LanguagesButton
} from './Languages.styles';

export const Languages = () => {
  const langContext = useContext(LanguageContext);
  const contrastContext = useContext(HighContrastContext);

  const onClickHandler = langName => {
    langContext.dispatch(langName);
  }

  const langButtons = Langs.map((
    { shortName, langName, title }
  ) => (
    <LanguagesButton
      key={shortName}
      aria-pressed={langContext.state.lang === langName}
      aria-label={title}
      isActive={langContext.state.lang === langName}
      hasHighContrast={contrastContext.state}
      onClick={() => onClickHandler(langName)}
    >{shortName}</LanguagesButton>
  ))

  return (
    <LanguagesContainer aria-label="Switch to another language">
      {langButtons}
    </LanguagesContainer>
  )
};

const Langs = [
  {
    shortName: 'EN',
    langName: 'en',
    title: 'Translate to English'
  },
  {
    shortName: 'PT',
    langName: 'pt-BR',
    title: 'Traduzir para Português'
  }
];
