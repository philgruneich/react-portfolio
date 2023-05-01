import styled from 'styled-components';
import { fluidType, pxToEm, pxToRem } from '~/utils/cssMixins';

export const FooterContainer = styled.div`
  min-height: 100vh;
  position: relative;
  background-color: ${props => props.theme['other-green']};
  background-image: url('assets/logo-long.svg');
  background-repeat: repeat-y;
  background-size: 100%;
  background-origin: content-box;

  ${props => props.hasHighContrast && `
    background-color: #000;
  `}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: calc(31.25vw + 2px);
    background-color: ${props => props.theme['other-green']};
    background-image: url('assets/logo-horizontal.svg');
    background-size: cover;

    ${props => props.hasHighContrast && `
      background-color: #000;
    `}

  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    background-color: ${props => props.theme['other-green']};
    background-position: bottom left;
    background-image: url('assets/logo-horizontal.svg');
    background-size: cover;
    height: calc(17.75vw + 2px);

    ${props => props.hasHighContrast && `
      background-color: #000;
    `}
  }
`;

export const FooterArticle = styled.article`
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1em;
  flex-direction: column;
  max-width: calc(${pxToRem(666)} + var(--xMargin) * 2);
  padding: 0 var(--xMargin);
  font-size: ${fluidType({
    viewportWidth: {
      min: 320,
      max: 920
    },
    size: {
      min: 24,
      max: 36
    }
  })};
  color: #fff;
  line-height: 1.4681;

  p {
    ${props => props.hasHighContrast && `
      text-shadow: -8px 0 #000, 0 8px #000, 8px 0 #000, 0 -8px #000;
    `}
  }

  @media (min-width: 992px) {
    font-size: ${pxToEm(36)}
  }
`;

export const FooterSmall = styled.small`
  font-size: .5em;
  opacity: 0.5;
  white-space: nowrap;

  ${props => props.hasHighContrast && `
    opacity: 1;
  `}
`;
