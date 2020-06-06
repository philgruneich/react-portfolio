import styled from 'styled-components';
import { Brand } from '~/components/Brand';

export const IntroWrapper = styled.div`
  background: ${props => props.theme.purple};
  min-height: 100vh;
  overflow: hidden;

  ${props => props.hasHighContrast && `
    background: #000;
  `}
`;

export const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: [content] 1fr [brand] min-content;
  grid-template-rows: var(--yMargin) 1fr var(--yMargin);
  min-height: 100vh;
`;

export const IntroBrand = styled.aside`
  display: none;
  grid-column-start: brand;
  grid-row-start: 1;
  grid-row-end: span 3;

  @media (min-width: 992px) {
    display: block;
    height: 100%;
  }
`;

export const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  grid-column-start: content;
  grid-row-start: 2;
`;

export const IntroLogo = styled(Brand).attrs({
  fill: '#fff'
})`
  width: auto;
`;

