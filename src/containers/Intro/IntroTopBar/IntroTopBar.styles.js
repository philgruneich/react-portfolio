import styled from 'styled-components';

export const IntroTopBarWrapper = styled.div`
  padding: 0 var(--xMargin);
`;

export const IntroTopBarContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: calc(var(--xMargin) / 2);
  justify-content: flex-end;
  width: 100%;
`;
