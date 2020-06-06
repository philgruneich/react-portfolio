import React, { useContext } from 'react';
import { LanguageContext } from '~/store/LanguageStore';
import { HighContrastContext } from '~/store/HighContrastStore';
import {
  WorkArticle,
  WorkHeader,
  WorkTitle,
  WorkAside,
  WorkText,
  WorkList,
  WorkListItem,
  WorkSection
} from './Work.styles';

export const Work = () => {
  const langContext = useContext(LanguageContext);
  const contrastContext = useContext(HighContrastContext);

  const _ = langContext.state.translations.work;

  const clients = Clients.map(c => <WorkListItem key={c}>{c}</WorkListItem>);

  return (
    <WorkArticle hasHighContrast={contrastContext.state}>
      <WorkHeader>
        <WorkTitle hasHighContrast={contrastContext.state}>{_.title}</WorkTitle>
      </WorkHeader>
      <WorkAside>
        <WorkText>{_.text}</WorkText>
      </WorkAside>
      <WorkSection>
        <WorkList>
          {clients}
        </WorkList>
      </WorkSection>
    </WorkArticle>
  )
}

const Clients = [
  'O Boticário',
  'Renault',
  'Frimesa',
  'Apae',
  'Corteva',
  'Portinari',
  'Uniprime',
  'HouseCricket',
  'Shopping Mueller',
  'TFG',
  'Bem Paraná'
];
