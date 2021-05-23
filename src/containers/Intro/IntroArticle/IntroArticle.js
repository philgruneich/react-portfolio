import React, { useContext } from 'react';
import { LanguageContext } from '~/store/LanguageStore';
import { Pronunciation } from '~/components/Pronunciation';
import { IntroHello } from './IntroHello';
import {
  IntroArticle as Article,
  IntroParagraph,
  IntroEmphasis,
  IntroStrong,
  IntroLink,
  IntroText
} from './IntroArticle.styles';

const NAME = 'Phillip Gruneich';
const AUDIO_SRC = '/assets/phillip-gruneich.mp3';
const EMPLOYER_URL = 'https://www.alayacare.com/'
const EMPLOYER_NAME = 'AlayaCare';

export const IntroArticle = () => {
  const langContext = useContext(LanguageContext);

  const _ = langContext.state.translations.intro.article;

  return (
    <Article>
      <IntroText>
        <IntroParagraph>
          <IntroEmphasis>{_.hi}</IntroEmphasis>, {_.iam} <IntroStrong>{NAME}</IntroStrong> <Pronunciation src={AUDIO_SRC} />, {_.text} <IntroLink href={EMPLOYER_URL} target="_blank" rel="noopener">{EMPLOYER_NAME}</IntroLink>.
        </IntroParagraph>
      </IntroText>
      <IntroHello />
    </Article>
  )
}
