import styled from 'styled-components';
import { pxToEm, pxToRem } from '~/utils/cssMixins';

export const LanguagesContainer = styled.div`
  color: #fff;
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${pxToRem(8)};
`;

export const LanguagesButton = styled.button.attrs({
  type: 'button'
})`
  appearance: none;
  margin: 0;
  padding: 0;
  border-width: 0 0 2px;
  border-style: solid;
  border-color: transparent;
  border-radius: 0;
  background: none;
  color: #fff;
  font-size: ${pxToEm(16)};
  opacity: .666;
  cursor: pointer;

  ${props => props.hasHighContrast && `
    opacity: 1;
  `}

  ${props => props.isActive && `
    border-bottom-color: currentColor;
    opacity: 1;
  `}
`;
