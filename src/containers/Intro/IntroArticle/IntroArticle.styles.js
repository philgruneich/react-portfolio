import styled from 'styled-components';
import { fluidType, pxToEm, pxToRem } from '~/utils/cssMixins';

export const IntroArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
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

const wavyBackground = `data:image/svg+xml;,${encodeURIComponent("<svg viewBox='0 0 20 6' xmlns='http://www.w3.org/2000/svg'><path fill='none' d='M0 0h20v6H0z'/><path d='M0 4.782c5 0 5-3.582 10-3.582s5 3.582 10 3.582S25 1.2 30 1.2s5 3.582 10 3.582' class='q' fill='none' stroke='#fff' stroke-width='1.8'/></svg>")}`;

const wavyBackgroundHover = `data:image/svg+xml;,${encodeURIComponent("<svg viewBox='0 0 20 6' xmlns='http://www.w3.org/2000/svg'><style>.q{animation:s .2s linear infinite;}@keyframes s {from {transform:translateX(0);}to {transform:translateX(-20px);}}</style><path fill='none' d='M0 0h20v6H0z'/><path d='M0 4.782c5 0 5-3.582 10-3.582s5 3.582 10 3.582S25 1.2 30 1.2s5 3.582 10 3.582' class='q' fill='none' stroke='#fff' stroke-width='1.8'/></svg>")}`;

export const IntroLink = styled.a`
  position: relative;
  color: inherit;
  text-decoration: none;

  &:after {
    position: absolute;
    top: 25%;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("${wavyBackground}");
    background-position: bottom;
    background-repeat: repeat-x;
    background-size: 20%;
    content: "";
  }

  &:hover {
    &:after {
      background-image: url("${wavyBackgroundHover}");
    }
  }
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
