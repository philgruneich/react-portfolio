import React, { useContext } from 'react';
import { LanguageContext } from '~/store/LanguageStore';
import { HighContrastContext } from '~/store/HighContrastStore';
import {
  CallToActionSvg,
  CallToActionGroup,
  CallToActionWavy,
  CallToActionTextGroup,
  CallToActionText,
  CallToActionLink
} from './CallToAction.styles';

export const CallToAction = () => {
  const langContext = useContext(LanguageContext);
  const contrastContext = useContext(HighContrastContext);

  const _ = langContext.state.translations.calltoaction;

  return (
    <CallToActionLink href={`mailto:${process.env.EMAIL_ADDRESS}`} aria-label={`${_.say} '${_.hi}'!`}>
      <CallToActionSvg>
        <CallToActionGroup>
          <CallToActionWavy hasHighContrast={contrastContext.state} />
          <CallToActionTextGroup hasHighContrast={contrastContext.state}>
            <CallToActionText x="606.571" y="592.749" transform="matrix(.6678 .38556 -.38936 .6744 -124.604 -581.137)">{_.say}</CallToActionText>
            <CallToActionText x="597.131" y="659.949" transform="matrix(.6678 .38556 -.38936 .6744 -124.604 -581.137)">'{_.hi}'!</CallToActionText>
          </CallToActionTextGroup>
        </CallToActionGroup>
      </CallToActionSvg>
    </CallToActionLink>
  )
};
