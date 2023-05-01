import styled from 'styled-components';

const wavyBackground = `data:image/svg+xml;,${encodeURIComponent("<svg viewBox='0 0 20 6' xmlns='http://www.w3.org/2000/svg'><path fill='none' d='M0 0h20v6H0z'/><path d='M0 4.782c5 0 5-3.582 10-3.582s5 3.582 10 3.582S25 1.2 30 1.2s5 3.582 10 3.582' class='q' fill='none' stroke='#fff' stroke-width='1.8'/></svg>")}`;

const wavyBackgroundHover = `data:image/svg+xml;,${encodeURIComponent("<svg viewBox='0 0 20 6' xmlns='http://www.w3.org/2000/svg'><style>.q{animation:s .2s linear infinite;}@keyframes s {from {transform:translateX(0);}to {transform:translateX(-20px);}}</style><path fill='none' d='M0 0h20v6H0z'/><path d='M0 4.782c5 0 5-3.582 10-3.582s5 3.582 10 3.582S25 1.2 30 1.2s5 3.582 10 3.582' class='q' fill='none' stroke='#fff' stroke-width='1.8'/></svg>")}`;
const wavyBackgroundSlow = `data:image/svg+xml;,${encodeURIComponent("<svg viewBox='0 0 20 6' xmlns='http://www.w3.org/2000/svg'><style>.q{animation:s .8s linear infinite;}@keyframes s {from {transform:translateX(0);}to {transform:translateX(-20px);}}</style><path fill='none' d='M0 0h20v6H0z'/><path d='M0 4.782c5 0 5-3.582 10-3.582s5 3.582 10 3.582S25 1.2 30 1.2s5 3.582 10 3.582' class='q' fill='none' stroke='#fff' stroke-width='1.8'/></svg>")}`;

export const WavyLink = styled.a`
  position: relative;
  color: inherit;
  text-decoration: none;

  &:after {
    position: absolute;
    top: 25%;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("${wavyBackgroundSlow}");
    background-position: bottom;
    background-repeat: repeat-x;
    background-size: 20%;
    content: "";

    @media (min-width: 992px) {
      background-image: url("${wavyBackground}");
    }
  }

  &:hover {
    &:after {
      background-image: url("${wavyBackgroundHover}");
    }
  }
`;
