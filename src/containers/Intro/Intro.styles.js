import styled from 'styled-components';
import { Brand } from '~/components/Brand';
import { IntroArticle } from '~/containers/Intro/IntroArticle';
import { IntroTopBar } from '~/containers/Intro/IntroTopBar';

export const IntroWrapper = styled.div`
  background: ${props => props.theme.indigo};
  min-height: 100vh;
  overflow: hidden;

  ${'' /* background-image:
					linear-gradient(-45deg, ${props => props.theme.orange} 16px, red 16px, blue 16px,  transparent 0),
					linear-gradient(45deg, ${props => props.theme.coral} 16px, transparent 0);
  background-position: left bottom;
  background-repeat: repeat-x;
  background-size: 22px 32px; */}

  ${props => props.hasHighContrast && `
    background: #000;
  `}
`;

export const IntroContainer = styled.div`
  min-height: 100vh;
`;

export const IntroSection = styled.section`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: [content] 1fr [topbar] 1fr;
  grid-template-rows: var(--yMargin) [topbar] min-content [content] 1fr var(--yMargin);

  @media (min-width: 992px) {
    grid-template-columns: [content] 1fr [brand] min-content;
  }
`;

export const IntroBrand = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
    height: 100%;
    grid-column-start: brand;
    grid-row-start: 1;
    grid-row-end: span 4;
  }
`;

export const IntroLogo = styled(Brand).attrs({
  fill: '#fff'
})`
`;

export const IntroArticleGrid = styled(IntroArticle)`
  grid-column-start: content;
  grid-row-start: content;
  grid-column-end: span 2;

  @media (min-width: 992px) {
    grid-column-end: 1;
  }
`;

export const IntroTopBarGrid = styled(IntroTopBar)`
  grid-row-start: topbar;
  grid-column-start: topbar;

  @media (min-width: 992px) {
    grid-column-start: content;
  }
`;

