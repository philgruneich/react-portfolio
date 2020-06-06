import styled from 'styled-components';
import { fluidType, pxToEm } from '~/utils/cssMixins';

export const Title = styled.h2`
  margin: 0;
  line-height: 1;
  font-size: ${fluidType({
    viewportWidth: {
      min: 320,
      max: 1200
    },
    size: {
      min: 64,
      max: 120
    }
  })};

  @media(min-width: 1200px) {
    font-size: ${pxToEm(120)};
  }
`;
