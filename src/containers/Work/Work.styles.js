import styled from 'styled-components';
import { Title } from '~/components/Title';
import { fluidType, pxToEm } from '~/utils/cssMixins';

export const WorkArticle = styled.article`
  display: grid;
  grid-gap: var(--xMargin)  calc(var(--xMargin) * 2);
  padding: var(--yMargin) var(--xMargin);
  background: #ff8361;
  color: #fff;

  @media (min-width: 992px) {
    grid-template-columns: [list] 1fr [text] 1fr;
  }

  ${props => props.hasHighContrast && `
    background: #000;
  `}
`;

export const WorkHeader = styled.header`
  @media (min-width: 992px) {
    grid-column-end: span 2;
  }
`;

export const WorkTitle = styled(Title)`
  color: #fdd630;
  font-weight: 700;

  ${props => props.hasHighContrast && `
    color: #fff;
  `}
`;

export const WorkAside = styled.aside`
  line-height: 1.38889;
  font-size: ${fluidType({
    viewportWidth: {
      min: 320,
      max: 1200
    },
    size: {
      min: 20,
      max: 36
    }
  })};

  @media(min-width: 1200px) {
    font-size: ${pxToEm(36)};
  }
`;

export const WorkText = styled.p`
  margin: 0;
`;

export const WorkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const WorkListItem = styled.li`
  font-weight: 700;
  line-height: 1.46841;
  font-size: ${fluidType({
    viewportWidth: {
      min: 320,
      max: 1200
    },
    size: {
      min: 32,
      max: 64
    }
  })};

  @media(min-width: 1200px) {
    font-size: ${pxToEm(64)};
    line-height: 1.25;
  }
`;

export const WorkSection = styled.section``;
