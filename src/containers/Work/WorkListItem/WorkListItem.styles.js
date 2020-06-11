import styled from 'styled-components';
import { fluidType, pxToEm } from '~/utils/cssMixins';

export const WorkListItem = styled.li`
  font-weight: 700;
  line-height: 1.46841;
  font-size: ${fluidType({
    viewportWidth: {
      min: 320,
      max: 1200
    },
    size: {
      min: 34,
      max: 72
    }
  })};
  transform-origin: 0% 50%;
  backface-visibility: hidden;
  transition: transform .5s;
  will-change: transform;

  @media(min-width: 1200px) {
    font-size: ${pxToEm(72)};
    line-height: 1.25;
  }
`;
