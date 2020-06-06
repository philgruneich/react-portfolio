import styled, { keyframes } from 'styled-components';

const WavyAnimation = keyframes`
  to {
    transform: rotate(360deg);
    transform-origin: 50% 50%;
  }
`;

export const CallToActionSvg = styled.svg.attrs({
  width: 160,
  height: 160,
  viewBox: '0 0 160 160',
  xmlns: 'http://www.w3.org/2000/svg'
})``;

export const CallToActionGroup = styled.g``

export const CallToActionWavy = styled.path.attrs({
  d: 'M80 0c4.683 0 8.945 8.368 14.047 9.383 5.103 1.015 12.243-5.086 16.568-3.294 4.326 1.792 5.061 11.154 9.387 14.044 4.326 2.89 13.257-.013 16.568 3.298 3.31 3.31.407 12.241 3.297 16.567 2.89 4.326 12.251 5.06 14.045 9.387 1.79 4.325-4.31 11.465-3.295 16.568 1.015 5.102 9.385 9.364 9.385 14.046 0 4.682-8.37 8.944-9.385 14.046-1.014 5.103 5.085 12.243 3.295 16.569-1.794 4.325-11.155 5.06-14.045 9.386-2.89 4.326.013 13.257-3.297 16.568-3.311 3.31-12.242.407-16.568 3.297-4.326 2.89-5.06 12.253-9.387 14.044-4.325 1.792-11.465-4.308-16.568-3.294C88.945 151.63 84.683 160 80.001 160c-4.682 0-8.944-8.369-14.047-9.384-5.102-1.014-12.242 5.086-16.568 3.294-4.326-1.791-5.06-11.154-9.386-14.044-4.326-2.89-13.257.013-16.568-3.297-3.31-3.311-.407-12.242-3.297-16.568-2.89-4.325-12.253-5.06-14.045-9.386-1.791-4.326 4.31-11.466 3.294-16.569C8.37 88.943.001 84.681.001 80c0-4.682 8.368-8.944 9.383-14.046C10.4 60.85 4.3 53.71 6.09 49.385c1.792-4.326 11.155-5.061 14.045-9.387 2.89-4.326-.013-13.257 3.297-16.567 3.311-3.311 12.242-.407 16.568-3.298 4.325-2.89 5.06-12.252 9.386-14.044 4.326-1.792 11.466 4.309 16.568 3.294C71.057 8.368 75.32-.001 80.001-.001z'
})`
  fill: ${props => props.theme.yellow};
  animation: ${WavyAnimation} 8s linear infinite;
  transform-origin: 50% 50%;

  ${props => props.hasHighContrast && `
    fill: #000;
    stroke-width: 2;
    stroke: #fff;
  `}
`;

export const CallToActionTextGroup = styled.g`
  transition: transform .5s .2s;
  transform-origin: 50% 50%;
  stroke: ${props => props.theme.red};
  stroke-width: 2.58;
  fill: none;
  font-size: 64px;
  font-weight: 700;

  ${props => props.hasHighContrast && `
    stroke: green;
  `}
`;

export const CallToActionText = styled.text``;

export const CallToActionLink = styled.a`
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  transition: transform .5s;
  transform-origin: 50% 50%;
  background: none;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transform-origin: 50% 50%;

    ${CallToActionWavy} {
      animation-duration: 2s;
    }

    ${CallToActionTextGroup} {
      transform: scale(1.4);
      transform-origin: 50% 50%;
    }
  }
`;
