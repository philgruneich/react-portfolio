import styled from 'styled-components';
import { Brand } from '~/components/Brand';

export const FooterSlideOut = styled.section`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const FooterWrapper = styled.div`
  background: ${props => props.theme.green};
  min-height: 100vh;
  overflow: hidden;

  ${props => props.hasHighContrast && `
    background: #000;
  `}
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: [content] 1fr [brand] min-content;
  grid-template-rows: var(--yMargin) 1fr var(--yMargin);
  min-height: inherit;
`;

export const FooterBrand = styled.aside`
  display: none;
  grid-column-start: brand;
  grid-row-start: 1;
  grid-row-end: span 3;

  @media (min-width: 992px) {
    display: block;
    height: 100%;
  }
`;

export const FooterLogo = styled(Brand).attrs(props => ({
  fill: props.theme.orange
}))`
  width: auto;
`;
