import styled from 'styled-components';
import { fluidType, pxToEm, pxToRem } from '~/utils/cssMixins';

export const IntroArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  @media (min-width: 992px) {
    font-size: ${pxToEm(36)}
  }

  @media only screen and (min-height: 769px) {
    display: grid;
    grid-template-rows: 1fr min-content 1fr;
  }
`;

export const IntroParagraph = styled.p`
  margin: 0;
`;

export const IntroEmphasis = styled.em`
  font-style: normal;
  text-decoration-line: underline;
  text-decoration-skip: trailing-spaces;
`;

// export const IntroButton = styled.button`
//   appearance: none;
//   display: inline;
//   margin: 0;
//   padding: 0;
//   border: 0;
//   border-radius: 0;
//   background: none;
//   color: inherit;
//   font-weight: bold;
// `;

export const IntroStrong = styled.strong`
  font-weight: 700;
`;

export const IntroText = styled.div`
  grid-row-start: 2;
  padding-top: var(--xMargin);
`;
